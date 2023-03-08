import './NextQuestionButton.css'

function NextQuestionButton({setIsLastQuestion,setIsClicked, currentQuestion, setCurrentQuestion}) {

    const next = () => {
        if (currentQuestion < 2) {
            setCurrentQuestion(prevState => prevState+1)
            setIsClicked(prevstate => false)
            if(currentQuestion===1){
                setIsLastQuestion(prevstate=>true)
                setCurrentQuestion(prevState => prevState-1)
            }
        }
    }

    return (
        <button onClick={next} className="quizNextQuestionButton">Dalej</button>
    )
}

export {NextQuestionButton};