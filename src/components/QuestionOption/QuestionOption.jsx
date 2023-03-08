import './QuestionOption.css'


function QuestionOption({setIsClicked,isClicked,setResult,txt,id,correct}){

    const check=()=>{
        let isCorrect=false
        setIsClicked(prevstate=>true)
        if(!isClicked){
            if(id===correct){
                setResult(prevstate=>prevstate+1)
                isCorrect=true
            }
        }
        return isCorrect
    }

    return(
        <>
            {
                !isClicked&&<button onClick={check} className={'questionOptionButton'}>{txt}</button>
            }
            {
                isClicked&&id===correct&&<button onClick={check} className={'questionOptionButton correct'}>{txt}</button>
            }
            {
                isClicked&&id!==correct&&<button onClick={check} className={'questionOptionButton wrong'}>{txt}</button>
            }
        </>
    )
}

export {QuestionOption};