import React from 'react';
import './style.scss';

import Wrapper from '../../templates/Wrapper/Wrapper';
import ContainerContent from '../../templates/ContainerContent/ContainerContent';

class Contact extends React.Component {
    render() {
        return (
            <Wrapper pageCurrent="contact">
               <ContainerContent>
                    <h1>Contact</h1>
               </ContainerContent>
            </Wrapper>
        )
    }
}
export default Contact;