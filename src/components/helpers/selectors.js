// Returns an array of appointment objects of target day
export function getAppointmentsForDay(state, day) {
  const appointmentList = [];

  // Picks out the weekday object that matches the target day 
  const filteredDays = state.days.filter(weekday => weekday.name === day);

  // Returns empty array if weekday provided does not exist
  if (!filteredDays[0]) {
    return appointmentList;
  };

  // Groups all appointment objects into an array
  filteredDays[0].appointments
    .forEach(num =>
      appointmentList.push(state.appointments[num])
    );

  return appointmentList;
};

// Returns an array of interview objects of target day
export function getInterviewersForDay(state, day) {
  const interviewersList = [];

  // Picks out the weekday object that matches the target day 
  const filteredDays = state.days.filter(weekday => weekday.name === day);

  // Returns empty array if weekday provided does not exist
  if (filteredDays.length === 0) {
    return interviewersList;
  };

  // Groups all interview objects into an array
  filteredDays[0].interviewers
    .forEach(num =>
      interviewersList.push(state.interviewers[num])
    );

  return interviewersList;
};

// Returns an object representing an interview of a target day
export function getInterview(state, interview) {
  return interview ?
    {
      ...interview,
      interviewer: state.interviewers[interview.interviewer]
    }
    : null;
};