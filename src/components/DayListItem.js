import React from 'react';
import classNames from 'classnames';
import 'components/DayListItem.scss'

// Functionality of each weekday in nav/sidebar
export default function DayListItem(props) {

  // Destructured properties
  const { selected, spots, name, setDay } = props;

  // Conditional classes based on selected/full state of the weekday
  const dayClass = classNames('day-list__item', {
    'day-list__item--selected': selected,
    'day-list__item--full': spots === 0
  });

  // Conditional statements based on remaining appointments spots for the weekday
  const formatSpots = (numSpots) => {
    switch (numSpots) {
      case 0: return 'no spots remaining';
      case 1: return '1 spot remaining';
      default: return `${numSpots} spots remaining`;
    }
  }

  return (
    <li 
    data-testid={'day'} 
    className={dayClass} onClick={() => {
      setDay(name)
    }}>
      <h2 className='text--regular'>
        {name}
      </h2>
      <h3 className='text--light'>
        {formatSpots(spots)}
      </h3>
    </li>
  );
}