import React, { Component } from 'react';

const NavBarButton = ({buttonName, link}) => {
  return (
    <div>
      { buttonName + '   Link: '+ link}
    </div>
  )
};


export default NavBarButton;