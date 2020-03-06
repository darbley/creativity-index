import React from 'react';
import './style.scss';
import {LanguageConsumer,TranslatableText} from '../../providers/LanguageProvider';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
//import { LanguageConsumer } from ''
//import { TranslatableText } from ‘../providers/LanguageProvider’
import Wrapper from '../../templates/Wrapper/Wrapper';
import ContainerContent from '../../templates/ContainerContent/ContainerContent';
import data from '../../data.json';
import Question from '../../components/Question/Question';
import AnswerOptions from '../../components/AnswerOptions/AnswerOptions';
import QuizResults from '../../components/QuizResults/QuizResults';

class Quiz extends React.Component {
    state = { 
        startQuiz: false,
        quizScore: 0,
        questions: data.questions,
        questionCount: 0,
    }

    componentDidMount = () => {
        console.log('state ',this.state.questions.length)

        if(this.state.questions){
            this.setState({
                questionsTotal: this.state.questions.length
            })
        }
    }

    onAnswerSelected = (event, key) => {
        const { questionCount } = this.state;
        console.log('clicked on answer ',key);
        
        // Grab current answer
        let currentAnswer = this.state.questions[questionCount].correct_answer;
        // Check to see if value of answer is correct
        
        if(key === currentAnswer){
            console.log('correct');
            this.setState({
                quizScore: this.state.quizScore + 1
            })
        }
        
        // Increment questionCount
        this.setState((prevState) => {
            return {
                questionCount: this.state.questionCount + 1
            }
        })
       

    }

   

    render() {
        const { questions, questionCount, questionsTotal } = this.state;
        console.log('q total ',questionCount);

        // If questions count is higher than questions.length -> show end screen
        if(questionCount !== 0 && questionCount >= questionsTotal){
            return (
                 
                <QuizResults score={this.state.quizScore} />
            )
        } 

        const question = questions[questionCount].question;
        const answers = Object.values(questions[questionCount].answers);
       
        //console.log('const ',questions);
        return (
            <Wrapper pageCurrent="quiz">
                <ContainerContent>
                    <h1>
                        <TranslatableText dictionary={{
                                en: "Quiz",
                                fr: "Quiz FR" }}>
                        </TranslatableText> 
                    </h1>
                </ContainerContent>

                <ContainerContent addClass="quiz-wrap">

                    <TransitionGroup  className={`transition-group `}>
                        <CSSTransition
                            key={this.state.questionCount}
                            timeout={{ enter: 800, exit: 400 }}
                            classNames={'transition-wrap'} 
                        >
                            <div>
                                <span>Score: {this.state.quizScore}</span>
                                <span>Question {(this.state.questionCount) + 1} of {this.state.questionsTotal}</span>
                                <span className="question-count">{(this.state.questionCount).toString()}</span>

                                <Question content={question} />

                                <AnswerOptions answers={questions[questionCount].answers} onAnswerSelected={this.onAnswerSelected} />

                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                   
               </ContainerContent>
            </Wrapper>
        )
    
    }
}
export default Quiz;