import React, { Component } from 'react';
import Question from '../question/Question';
import QuestionCount from '../count/QCount';
import AnswerOption from '../option/AOption';
import PropTypes from 'prop-types';


function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}/>
    );
  }
    return (
       <div className="quiz">
         <QuestionCount
           counter={props.questionId}
           total={props.questionTotal}/>
         <Question content={props.question} />
         <ul className="answerOptions">
           {props.answerOptions.map(renderAnswerOptions)}
         </ul>
       </div>
    );
  }

  Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };

  export default Quiz;