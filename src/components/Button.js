import React from "react";
import classNames from 'classnames';
import "components/Button.scss";

export default function Button(props) {
   const { confirm, danger, onClick, disabled, children } = props;

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
