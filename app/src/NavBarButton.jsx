import React, { Component } from 'react';

const NavBarButton = ({buttonName, link}) => {
  return (
    <div className="button">
      { buttonName + '   Link: '+ link}
    </div>
  )
};


export default NavBarButton;