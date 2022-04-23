import React from 'react';
import 'components/Appointment/styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import useVisualMode from 'hooks/useVisualMode';
import Form from './Form';

const Appointment = (props) => {
  const { time, interview, student, interviewer } = props;

  const SHOW = 'SHOW';
  const CREATE = 'CREATE';
  const EMPTY = 'EMPTY';

  const { mode, transition, back } = useVisualMode(
    props.interview ?
      SHOW :
      EMPTY
  );

  const interviewers = [];

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === SHOW &&
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          onEdit={() => { console.log('EDIT BUTTON') }}
          onDelete={() => { console.log('DELETE BUTTON') }}
        />}
      {mode === EMPTY &&
        <Empty onAdd={() => {
          transition(CREATE)
        }}
        />}
      {mode === CREATE &&
        <Form
          student={student}
          interviewer={interviewer}
          interviewers={interviewers}
          onSave={e => {
            console.log('SAVE BUTTON');
            e.preventDefault()}}
          onCancel={() => back()}
        />
      }
    </article>
  );
};

export default Appointment;