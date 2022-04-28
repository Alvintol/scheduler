import React from 'react';
import 'components/Application.scss';
import DayList from './DayList';
import Appointment from './Appointment';
import { getAppointmentsForDay, getInterviewersForDay, getInterview } from './helpers/selectors';
import useApplicationData from 'hooks/useApplicationData';

// Main front end HTML Build
export default function Application() {

  // Destructured properties
  const {
    state,
    setDay,
    bookInterview,
    deleteInterview
  } = useApplicationData();

  // Isolates a list of appointments/interviewers for target weekday
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const dailyInterviewers = getInterviewersForDay(state, state.day);

  // Builds each existing appointment
  const eachAppointment = dailyAppointments.map(appointment => {

    // Destructured properties
    const { id, time } = appointment;

    // Isolates a single target interview object 
    const interview = getInterview(state, appointment.interview);

    return (
      <Appointment
        key={id}
        id={id}
        time={time}
        interview={interview}
        interviewers={dailyInterviewers}
        bookInterview={bookInterview}
        deleteInterview={deleteInterview}
      />
    );
  });

  return (
    <main className='layout'>
      <section className='sidebar'>
        <img
          className='sidebar--centered'
          src='images/logo.png'
          alt='Interview Scheduler'
        />
        <hr className='sidebar__separator sidebar--centered' />
        <nav className='sidebar__menu'>
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
        <img
          className='sidebar__lhl sidebar--centered'
          src='images/lhl.png'
          alt='Lighthouse Labs'
        />
      </section>
      <section className='schedule'>
        {eachAppointment}
        <Appointment
          key='last'
          time='5pm'
        />
      </section>
    </main>
  );
}
