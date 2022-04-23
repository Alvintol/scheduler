import React from 'react';
import 'components/InterviewerList.scss';
import InterviewerListItem from './InterviewerListItem';

const InterviewerList = (props) => {

  const eachPerson = props.interviewers.map(person => 
    <InterviewerListItem
      key={person.id}
      avatar={person.avatar}
      name={person.name}
      selected={person.id === props.value}
      setInterviewer={()=> props.onChange(person.id)}
    />
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