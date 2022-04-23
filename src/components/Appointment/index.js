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
  const interviewers = [];
  const { mode, transition, back } = useVisualMode(
    props.interview ?
      SHOW :
      EMPTY
  );

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === SHOW &&
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
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
          onSave={e => e.preventDefault()}
          onCancel={() => back()}
        />
      }
    </article>
  );
};

export default Appointment;