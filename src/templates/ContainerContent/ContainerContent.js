import React from 'react';
import './style.scss';

const ContainerContent = ({children, addClass}) => {

  return (
    <div className={`container ${addClass}`}>
      <div className="content">
        {children}
      </div>
    </div>
  )
}
export default ContainerContent;