import React from 'react';
import './style.scss';
import {LanguageConsumer,TranslatableText} from '../../providers/LanguageProvider';

//import { LanguageConsumer } from ''
//import { TranslatableText } from ‘../providers/LanguageProvider’

import Wrapper from '../../templates/Wrapper/Wrapper';
import ContainerContent from '../../templates/ContainerContent/ContainerContent';

import data from '../../data.json';

class Quiz extends React.Component {
    state = {
        startQuiz: false,
        quizScore: '',
        questions: data.questions,
        questionCount: 0
    }

    componentDidMount = () => {
        console.log('state ',this.state)
    }



    render() {
        const { questions, questionCount } = this.state;
        const answers = Object.values(questions[questionCount].answers);
        
        console.log('const ',questions);
        return (
            <Wrapper pageCurrent="home">
               <ContainerContent>
                    <h1>
                        <TranslatableText dictionary={{
                                en: "Quiz",
                                fr: "Quiz FR" }}>
                        </TranslatableText> 
                    </h1>
               </ContainerContent>

               <ContainerContent>
                   <h2>{`${questions[questionCount].question}`}</h2>
                   <div>
                       {
                           answers.map( (answer, i) => {
                               return (
                                   <li key={i}>{answer}</li>
                               )
                           })
                         
                       }
                       {
                           Object.entries(questions[questionCount].answers).forEach(([key, value]) => {
                               return <li>{key}</li>
                           })
                       }
                   </div>
               </ContainerContent>
            </Wrapper>
        )
    }
}
export default Quiz;