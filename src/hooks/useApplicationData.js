import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {

  // Default states and change functions for respective data 
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  // Functions for changing existing weekday data
  const setDay = day => setState({ ...state, day });

  // API data request
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
      // ,axios.get('/api/debug/reset')
    ]).then((all) => {
      setState(prev => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }));
    })
      .catch((error) => {
        console.log('ERROR:', error);
        return error;
      });
  }, []);


  const updateSpots = (state, appointments) => {
    
    const weekday = state.days.find(weekday => weekday.name === state.day);
    let spots = 0;

    for (const id of weekday.appointments) {
      const appointment = appointments[id];
      if (!appointment.interview)
        spots++
    }

    const day = { ...weekday, spots };
    const days = state.days.map(weekday => 
      weekday.name === state.day ? day : weekday)
    return days;
  }

  const bookInterview = (id, interview) => {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, {
      interview
    })
      .then(() => {
        const days = updateSpots(state, appointments);
        setState({ ...state, days, appointments })
      });
  };


  const deleteInterview = (id, interview) => {
    
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`, {
      interview
    })
      .then(() => {
        const days = updateSpots(state, appointments);
        setState({ ...state, days, appointments })
      })
  };

  return { state, setDay, bookInterview, deleteInterview }
};