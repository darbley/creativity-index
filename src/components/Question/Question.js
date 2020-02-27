import React from 'react';
import PropTypes from 'prop-types';

const Question = (props) => (
    <h2>{props.content}</h2>
)
export default Question;

Question.propTypes = {
    content: PropTypes.string.isRequired
};