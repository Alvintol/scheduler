import React from 'react';
import 'components/InterviewerList.scss';
import InterviewerListItem from './InterviewerListItem';

const InterviewerList = (props) => {
  const { interviewers, value, onChange } = props;

  const eachPerson = interviewers.map(person => {
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