import React, { useState } from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';

const Form = (props) => {

  const [value, setValue] = useState(props.student || '');
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = () => {
    setInterviewer('');
    setValue('');
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name='name'
            type="text"
            placeholder="Enter Student Name"
            value={value}
            onChange={() => setValue(value)}
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={() => reset()} danger >
            Cancel
          </Button>
          <Button onClick={props.onSave} confirm >
            Save
          </Button>
        </section>
      </section>
    </main>
  );
};

export default Form;