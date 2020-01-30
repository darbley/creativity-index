import React from 'react';
import './style.scss';

const ContainerContent = ({children}) => {

  return (
    <div className={`container `}>
      <div className="content">
        {children}
      </div>
    </div>
  )
}
export default ContainerContent;