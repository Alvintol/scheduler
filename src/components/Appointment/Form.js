import React, { useState } from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';

const Form = (props) => {

  const [student, setStudent] = useState(props.student || '');
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = () => {
    setInterviewer(null);
    setStudent('');
    props.onCancel();
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
            value={student}
            onChange={e => setStudent(e.target.value)}
            onSubmit={e => e.preventDefault()}
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={(e) => setInterviewer(e)}
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