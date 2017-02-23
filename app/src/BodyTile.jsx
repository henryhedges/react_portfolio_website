import React, { Component } from 'react';

const BodyTile = ({project, tileClass}) => {
  return (
    <div className={tileClass}>
      {project}
    </div>
  );
};


export default BodyTile;