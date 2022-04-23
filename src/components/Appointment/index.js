import React from 'react';
import 'components/Appointment/styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import useVisualMode from 'hooks/useVisualMode';

const Appointment = (props) => {

  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === SHOW &&
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />}
      {mode === EMPTY &&
        <Empty />}
    </article>
  );
};

export default Appointment;