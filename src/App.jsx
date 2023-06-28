import { useState } from "react"
import "./App.css"

function App() {
  const [num1, setNum1] = useState(Math.floor(Math.random()*15))
  const [num2, setNum2] = useState(Math.floor(Math.random()*15))
  const [reponse, setReponse] = useState(0)
  const [games, setGames] = useState(0)
  const [score, setScore] = useState(0)

  const handleInput = (e) => {
    setReponse(e.target.value)
  }
  
  const handleCalcul = (e) => {
    e.preventDefault()
    if(reponse===""){
      console.log("Enter a value!");
    }else{

      if( num1 + num2 === parseInt(reponse)){
        setScore(score + 1)
        setNum1(Math.floor(Math.random()*15))
        setNum2(Math.floor(Math.random()*15))
        document.querySelector('.operation').classList.remove("incorrect")

      } else {
        setScore(score - 1)
        document.querySelector('.operation').classList.add("incorrect")
      }
      setReponse("")
      setGames(games + 1)
    }
  }

  if(score == 10){
    return (
      <div className="wrapper">
      <div className="operation win">You won!!!</div>
      </div>
    )
  }

  return (
    <div className="wrapper">
      <form className="display">
        <div className="operation">
        <span>{num1}</span>+<span>{num2}</span>
        </div>
        <input onChange={handleInput} autoFocus type="text" value={reponse}/>
        <button onClick={handleCalcul}>Calculer</button>
      </form>
          
      <div className="messages">
        <p>You have played <span id="games">{games}</span> times.</p>
        <hr />
        <small>You have one point after each correct answer.</small>
        <p>Your score is <span id="score">{score}</span></p>
      </div>
    </div>
  )
}

export default App
