import React from 'react';
import './style.scss';

import Wrapper from '../../templates/Wrapper/Wrapper';
import ContainerContent from '../../templates/ContainerContent/ContainerContent';

class Home extends React.Component {
    render() {
        return (
            <Wrapper pageCurrent="home">
               <ContainerContent>
                    <h1>Home</h1>
               </ContainerContent>
            </Wrapper>
        )
    }
}
export default Home;