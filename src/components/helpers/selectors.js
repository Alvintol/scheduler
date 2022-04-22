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
}
