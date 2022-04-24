import React from 'react';
import 'components/InterviewerList.scss';
import InterviewerListItem from './InterviewerListItem';

// View of available interviewers 
const InterviewerList = (props) => {
  // Destructured properties
  const { interviewers, value, onChange } = props;

  // Isolates each interviewer object
  const eachPerson = interviewers.map(person => {
    // Destructured properties of person perperty
    const { id, avatar, name } = person;

    return <InterviewerListItem
      key={id}
      avatar={avatar}
      name={name}
      selected={id === value}
      setInterviewer={() => onChange(id)}
    />
  }
  );

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">
      </h4>
      <ul className="interviewers__list">
        {eachPerson}
      </ul>
    </section>
  );
};

export default InterviewerList;