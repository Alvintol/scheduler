import React, { useState, useEffect } from "react";
import "components/Application.scss";
import DayList from './DayList';
import Appointment from './Appointment';
import axios from 'axios';
import { getAppointmentsForDay, getInterviewersForDay, getInterview } from './helpers/selectors';

// Main front end HTML Build
export default function Application() {

  // Default states and change functions for respective data 
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  // const [appointments, setAppointments] = useState({})

  // Functions for changing existing weekday data
  const setDay = day => setState({ ...state, day });
  // const setDays = days => setState(prev => ({ ...prev, days }));

  // Function that isolates a list of appointments/interviewers for target weekday
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const dailyInterviewers = getInterviewersForDay(state, state.day);

  // API data request
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
      // ,axios.get('/api/debug/reset'),
    ]).then((all) => {
      setState(prev => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }));
    })
      .catch((error) => {
        console.log(error.response.status);
        console.log(error.response.headers);
        console.log(error.response.data);
      });
  }, []);

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    setState({ ...state, appointments })
    return axios.put(`/api/appointments/${id}`, {
      interview
    })
      .then(() => {
        setState(...state.appointments, appointments)
      })
      .catch((error) => {
        console.log(error.response)
      });
  };

  const eachAppointment = dailyAppointments.map(appointment => {

    // Destructured properties
    const { id, time } = appointment;
    const interview = getInterview(state, appointment.interview);

    return (
      <Appointment
        key={id}
        id={id}
        time={time}
        interview={interview}
        interviewers={dailyInterviewers}
        bookInterview={bookInterview}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {eachAppointment}
        <Appointment
          time='5pm'
        />
      </section>
    </main>
  );
}
