import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Question = (props) => (
    <h2 className="question">{props.content}</h2>
)
export default Question;

Question.propTypes = {
    content: PropTypes.string.isRequired
};