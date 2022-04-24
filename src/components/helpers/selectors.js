export function getAppointmentsForDay(state, day) {
  const appointmentList = [];

  // Picks out the weekday object that matches the target day 
  const filteredDays = state.days.filter(weekday => weekday.name === day);
  
  // Returns empty array if weekday provided does not exist
  if (filteredDays.length === 0) {
    return appointmentList;
  }

  // Groups all  
  filteredDays[0].appointments
    .forEach(num =>
      appointmentList.push(state.appointments[num])
    )

  return appointmentList;
};

export function getInterviewersForDay(state, day) {
  const filteredDays = state.days.filter(weekday => weekday.name === day);
  const interviewersList = [];
  
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