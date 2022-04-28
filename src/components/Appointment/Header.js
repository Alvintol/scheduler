import React from 'react';

// View for timeslot header
const Header = (props) => {

  // Destructured properties
  const { time } = props;

  return <header className='appointment__time'>
      <h4 className='text--semi-bold'>
        {time}
      </h4>
      <hr className='appointment__separator' />
    </header>
};

export default Header;