export function getAppointmentsForDay(state, day) {
  const appointmentList = [];

  const filteredDays = state.days.filter(weekday => weekday.name === day);
  if (filteredDays.length === 0) {
    return appointmentList;
  }

  filteredDays[0].appointments
    .forEach(num =>
      appointmentList.push(state.appointments[num])
    )
  return appointmentList;
};

export function getInterview(state, interview) {
  return interview ? 
  {...interview,
      interviewer: state.interviewers[interview.interviewer]
    }
  : null;
};