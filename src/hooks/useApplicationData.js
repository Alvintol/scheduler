import { useState, useEffect } from 'react';
import axios from 'axios';

// Functions for database updating
export default function useApplicationData() {

  // Default states and change functions for respective data 
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {}
  });

  // Functions for changing existing weekday data
  const setDay = day => setState({ ...state, day });

  // API data request on page load
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      // Updates empty database
      setState(prev => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }));
    })
      //error handler
      .catch((error) => {
        console.log('ERROR:', error);
        return error;
      });
  }, []);

  // Changes number of spots available in each day
  const updateSpots = (state, appointments) => {
    let spots = 0;

    // Finds the day of the week clicked
    const weekday = state.days.find(weekday =>
      weekday.name === state.day);

    // Changes number of spots in weekday object
    weekday.appointments.forEach(id => {
      const appointment = appointments[id];
      if (!appointment.interview) {
        spots++
      }
    });

    // Update new days array
    const day = { ...weekday, spots };
    const days = state.days.map(weekday =>
      weekday.name === state.day ? day : weekday);
    return days;
  }

  // Adds a new interview object into the database
  const bookInterview = (id, interview) => {

    // Updates a target appointment object in database 
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    // Updates the whole appointments object in database 
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, {
      interview
    })
      .then(() => {
        const days = updateSpots(state, appointments);
        setState({ ...state, days, appointments });
      });
  };

  // Deletes an existing interview object in the database
  const deleteInterview = (id, interview) => {

    // Updates a target appointment object in database 
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    // Updates the whole appointments object in database 
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