import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const AnswerOptions = (props) => {
    const { answers, onAnswerSelected } = props;
    const answersList = Object.entries(answers).map(([key,value])=>{
        return (
           
            <li className="answerOption" key={key}>
                <input
                    id={value}
                    type="radio"
                    className="radioCustomButton"
                    name="radioGroup"
                    checked={false}
                    value={key}
                    onChange={(e) => onAnswerSelected(e, key)}
                />
                <label className="radioCustomLabel" htmlFor={value}>
                    {value}
                </label>
            </li>
            
        )
    })

    return (
        <ul className="answer-options">
            {answersList}
        </ul>
    )
}
export default AnswerOptions;

AnswerOptions.propTypes = {
    answers: PropTypes.object.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};
