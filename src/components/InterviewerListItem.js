import React from 'react';
import 'components/InterviewerListItem.scss';
import classNames from 'classnames';

const InterviewerListItem = (props) => {

  const interviewerClass = classNames('interviewers__item', {
    'interviewers__item--selected': props.selected
  })

  return (
    <li onClick={()=> props.setInterviewer(props.id)}className={interviewerClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
        
      />
      {props.name}
    </li>
  );

};

export default InterviewerListItem;