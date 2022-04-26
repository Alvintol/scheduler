import React, { useState } from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';

// View for new appointment form
const Form = (props) => {

  // Destructured properties
  const { onSave, onCancel, interviewers } = props;

  // Default states and change functions for student/interviewer 
  const [error, setError] = useState("");
  const [student, setStudent] = useState(props.student || '');
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const validate = () => {
    if (!student) {
      setError("Student name cannot be blank");
      return;
    }

    if (!interviewer) {
      setError("Please select an interviewer");
      return;
    }
    onSave(student, interviewer);
  };


  // Resets selected and imput values
  const reset = () => {
    setInterviewer(null);
    setStudent('');
    onCancel();
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
            onChange={e => {setStudent(e.target.value)}}
            onSubmit={e => {e.preventDefault()}}
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList
          interviewers={interviewers}
          value={interviewer}
          onChange={(e) => setInterviewer(e)}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={() => reset()} danger >
            Cancel
          </Button>
          <Button onClick={() => validate()} confirm >
            Save
          </Button>
        </section>
      </section>
    </main>
  );
};

export default Form;