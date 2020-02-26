import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import {LanguageConsumer,TranslatableText} from '../../providers/LanguageProvider';
import { getLang } from '../../helpers';

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
                    <Link to={`${getLang()}/quiz`} >Take the quiz</Link>
               </ContainerContent>
            </Wrapper>
        )
    }
}
export default Home;