import React from 'react';
import './style.scss';
import {LanguageConsumer,TranslatableText} from '../../providers/LanguageProvider';

//import { LanguageConsumer } from ''
//import { TranslatableText } from ‘../providers/LanguageProvider’

import Wrapper from '../../templates/Wrapper/Wrapper';
import ContainerContent from '../../templates/ContainerContent/ContainerContent';

class Home extends React.Component {
    render() {
        return (
            <Wrapper pageCurrent="home">
               <ContainerContent>
                    <h1>
                        <TranslatableText dictionary={{
                                en: "Home",
                                fr: "Home FR" }}>
                        </TranslatableText> 
                    </h1>
               </ContainerContent>
            </Wrapper>
        )
    }
}
export default Home;