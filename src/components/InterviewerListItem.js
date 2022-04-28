import React from 'react';
import 'components/InterviewerListItem.scss';
import classNames from 'classnames';

// Functionality of each interviewer element
const InterviewerListItem = (props) => {
  // Destructured properties
  const { setInterviewer, avatar, name, selected } = props;

  // Conditional classes for selected state of interviewer element
  const interviewerClass = classNames('interviewers__item', {
    'interviewers__item--selected': selected
  });

  return <li
      className={interviewerClass}
      onClick={setInterviewer}>
      <img
        className='interviewers__item-image'
        src={avatar}
        alt={name}
      />
      {selected && name}
    </li>
};

export default InterviewerListItem;