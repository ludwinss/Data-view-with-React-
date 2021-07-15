import React from 'react';

interface props {
  className: string
  onClick: any
}

const IconMenu: React.FC<props> = (props) => (
  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" className={props.className} onClick={props.onClick} xmlns="http://www.w3.org/2000/svg">
    <path d="M0 2V0H12V2H0Z" fill="#5E85E8"/>
    <path d="M0 7H18V5H0V7Z" fill="#5E85E8"/>
    <path d="M0 12H12V10H0V12Z" fill="#5E85E8"/>
  </svg>
);

export default IconMenu;
