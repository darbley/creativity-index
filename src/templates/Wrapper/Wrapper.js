import React from 'react';
import './style.scss';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Wrapper = ( {children, pageCurrent}) => {

return (

  <div className={`wrapper ${pageCurrent}`}>
    <Header />
    {children}
    <Footer />
  </div>
)
}
export default Wrapper;