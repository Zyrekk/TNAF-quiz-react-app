import React from 'react';
import { useState } from 'react';
import './Quiz.css';
import { Question } from '../Question/Question';
import { NextQuestionButton } from '../NextQuestionButton/NextQuestionButton';
import { QuizResult } from '../QuizResult/QuizResult';

function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const correct = Number(questions[currentQuestion].correct)
  const [result, setResult] = useState(0)
  const [isClicked,setIsClicked] =useState(false)
  const [isLastQuestion,setIsLastQuestion] =useState(false)
  return (
    <div className='quizContainer'>
      {
        !isLastQuestion&&
        <>
          <div className="quizHeader">Pytanie {currentQuestion + 1}/2</div>
          <Question
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              setResult={setResult}
              questionContent={questions[currentQuestion].text}
              questionAnswers={questions[currentQuestion].options}
              correct={correct}/>

          <div className='button'>
            <NextQuestionButton
                setIsLastQuestion={setIsLastQuestion}
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                setIsClicked={setIsClicked}/>
          </div>
        </>
      }
      {
        isLastQuestion&&<QuizResult result={result} />
      }
    </div>
  )
}

export { Quiz };
