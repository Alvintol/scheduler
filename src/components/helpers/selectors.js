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
export function getInterviewersForDay(state, day) {
  const interviewersList = [];

  const filteredDays = state.days.filter(weekday => weekday.name === day);
  
  if (filteredDays.length === 0) {
    return interviewersList;
  }

  filteredDays[0].interviewers
    .forEach(num =>
      interviewersList.push(state.interviewers[num])
    )
  return interviewersList;
};

export function getInterview(state, interview) {
  return interview ? 
  {...interview,
      interviewer: state.interviewers[interview.interviewer]
    }
  : null;
};