import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import Wrapper from '../../templates/Wrapper/Wrapper';
import ContainerContent from '../../templates/ContainerContent/ContainerContent';

const QuizResults = (props) => (

    <Wrapper pageCurrent="quiz-results">

        <ContainerContent>
            <h1>Congratulations!</h1>
            <p>You Scored a {`${props.score}`}</p>
        </ContainerContent>

        <ContainerContent>
            <Link to="/" >Back to home</Link>
        </ContainerContent>
       
    </Wrapper>

)
export default QuizResults;