import React from 'react';
import './style.scss';

import Wrapper from '../../templates/Wrapper/Wrapper';
import ContainerContent from '../../templates/ContainerContent/ContainerContent';

class About extends React.Component {
    render() {
        return (
            <Wrapper pageCurrent="about">
               <ContainerContent>
                    <h1>About</h1>
               </ContainerContent>
            </Wrapper>
        )
    }
}
export default About;