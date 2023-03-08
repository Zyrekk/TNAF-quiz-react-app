import './Question.css';
import { QuestionOption } from '../QuestionOption/QuestionOption';

function Question({setIsClicked,isClicked,setResult,questionContent, questionAnswers, correct }) {
    return (
        <div className="questionContainer">
            <div>{questionContent}</div>
            <div className="verticalDivider" />
            <div className="questionAnswers">
                {questionAnswers.map((e,i) => <QuestionOption key={i} setIsClicked={setIsClicked} isClicked={isClicked} setResult={setResult} txt={e.answer} id={e.id} correct={correct} />)}
            </div>
        </div>
    )
}

export { Question };