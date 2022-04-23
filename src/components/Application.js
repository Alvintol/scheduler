import React, { useState, useEffect } from "react";
import "components/Application.scss";
import DayList from './DayList';
import Appointment from './Appointment';
import axios from 'axios';
import { getAppointmentsForDay, getInterview } from './helpers/selectors';

export default function Application() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviews: {}
  });
  // const [appointments, setAppointments] = useState({})

  const setDay = day => setState({ ...state, day });
  // const setDays = days => setState(prev => ({ ...prev, days }));
  const dailyAppointments = getAppointmentsForDay(state, state.day);

  
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({ 
        ...prev, 
        days: all[0].data, 
        appointments: all[1].data, 
        interviewers: all[2].data }));
    })
    .catch((error) => {
      console.log(error.response.status);
      console.log(error.response.headers);
      console.log(error.response.data);
    });
  }, []);
  
  const eachAppointment = dailyAppointments.map(appointment => {
    const interview = getInterview(state, appointment.interview);
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
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
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
