import React from 'react';
import './style.scss';

import Header from '../../components/Header/Header';

const Wrapper = ( {children, pageCurrent}) => {

return (

  <div className={`wrapper ${pageCurrent}`}>
    <Header />
    {children}
  </div>
)
}
export default Wrapper;