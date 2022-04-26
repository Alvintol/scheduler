import React from 'react';
import Button from 'components/Button';

// View of appointment deletion 
const Confirm = (props) => {
  
  // Destructured properties
  const { onCancel, onConfirm } = props;

  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">Do you wish to delete this appointment?</h1>
      <section className="appointment__actions">
        <Button onClick={onCancel} danger>Cancel</Button>
        <Button onClick={onConfirm} danger>Confirm</Button>
      </section>
    </main>
  );
};

export default Confirm;