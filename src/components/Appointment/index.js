import React from 'react';
import 'components/Appointment/styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import useVisualMode from 'hooks/useVisualMode';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';


// View of each appointment slot body
const Appointment = (props) => {

  // Destructured properties
  const { id, time, interview, interviewers, bookInterview, deleteInterview } = props;

  // Variables that designate the view of the appointment slot
  const SHOW = 'SHOW';
  const CREATE = 'CREATE';
  const EMPTY = 'EMPTY';
  const SAVING = 'SAVING';
  const DELETE = 'DELETE';
  const CONFIRM = 'CONFIRM';
  const EDIT = 'EDIT';
  const ERROR_SAVE = 'ERROR_SAVE';
  const ERROR_DELETE = 'ERROR_DELETE';


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
      .then(() => transition(SHOW))
      .catch(() => transition(ERROR_SAVE, true))
  };

  const onDelete = () => {
    const interview = null;

    transition(DELETE, true);
    deleteInterview(id, interview)
      .then(() => transition(EMPTY))
      .catch(() => transition(ERROR_DELETE, true))
  };

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === SHOW &&
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          onEdit={() => transition(EDIT)}
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
      {mode === EDIT &&
        <Form
          student={interview.student}
          interviewer={interview.interviewer.id}
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
          message='POOF! Wish Granted'
          poof='poof' />
      }
      {mode === CONFIRM &&
        <Confirm
          onCancel={() => { back() }}
          onConfirm={onDelete}
        />
      }
      {mode === ERROR_SAVE &&
        <Error
          onClose={() => transition(SHOW)}
          message='Oops error onSave'
        />
      }
      {mode === ERROR_DELETE &&
        <Error
          onClose={() => back(SHOW)}
          message='Oops error delete'
        />
      }
    </article>
  );
};

export default Appointment;