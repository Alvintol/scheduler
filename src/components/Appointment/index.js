import React from 'react';
import 'components/Appointment/styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import useVisualMode from 'hooks/useVisualMode';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';

// View of each appointment slot body
const Appointment = (props) => {
  console.log('APPOINTMENT PROPS:', props)
  // Destructured properties
  const { id, time, interview, interviewers, bookInterview, deleteInterview } = props;

  // Variables that designate the view of the appointment slot
  const SHOW = 'SHOW';
  const CREATE = 'CREATE';
  const EMPTY = 'EMPTY';
  const SAVING = 'SAVING';
  const DELETE = 'DELETE';
  const CONFIRM = 'CONFIRM';


  // Destructured properties of imported visual hooks
  const { mode, transition, back } = useVisualMode(
    props.interview ?
      SHOW :
      EMPTY
  );

  const save = (name, interviewer) => {

    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);
    bookInterview(id, interview)
      .then(() => {
        transition(SHOW)
      }
      );
  };

  const onDelete = () => {

    const interview = null;

    transition(DELETE);
    deleteInterview(id, interview)
      .then(() =>
        transition(EMPTY));
  };

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === SHOW &&
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          onEdit={() => { console.log('EDIT BUTTON') }}
          onDelete={() => transition(CONFIRM)}
        />}
      {mode === EMPTY &&
        <Empty onAdd={() => {
          transition(CREATE)
        }}
        />}
      {mode === CREATE &&
        <Form
          interviewers={interviewers}
          onSave={save}
          onCancel={() => back()}
        />
      }
      {mode === SAVING &&
        <Status
          message='Loading Right Meow' />
      }
      {mode === DELETE &&
        <Status
          message='POOF! Wish Granted' />
      }
      {mode === CONFIRM &&
        <Confirm
        onCancel={() => {back()}}
        onConfirm={onDelete}
        />
      }
    </article>
  );
};

export default Appointment;