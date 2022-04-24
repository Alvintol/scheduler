import React from "react";
import classNames from 'classnames';
import "components/Button.scss";

// All buttons and functionality
export default function Button(props) {
   
   // Destructured properties
   const { confirm, danger, onClick, disabled, children } = props;

   // Conditional classes for cancel/delete buttons
   let buttonClass = classNames('button', {
      'button--confirm': confirm,
      'button--danger': danger
   });

   return <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}>
      {children}
   </button>;
}
