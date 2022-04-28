import React from 'react';
import DayListItem from './DayListItem';

// View of each weekday in nav/sidebar
export default function DayList(props) {

  // Destructured properties
  const { days, value, onChange } = props;

  // Isolates each weekday 
  const eachDay = days.map(day => {

    const { id, name, spots } = day;

    return <DayListItem
      key={id}
      name={name}
      spots={spots}
      selected={name === value}
      setDay={onChange}
    />
  });

  return (
    <ul>
      {eachDay}
    </ul>
  );
};
