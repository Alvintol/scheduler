import React from 'react';

// View for an empty time slot
const Empty = (props) => {
  
  // Destructured properties
  const { onAdd } = props;

  return <main className='appointment__add'>
      <img
        className='appointment__add-button'
        src='images/add.png'
        alt='Add'
        onClick={onAdd}
      />
    </main>
};

export default Empty;