import { React } from 'react';


export const Button = ({ children, onClick }) => {
  return (
    <button className="ServiceButton" onClick={onClick}>
      {children}
    </button>
  );
};


