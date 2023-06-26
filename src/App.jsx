import { useState } from "react"


function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
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
      } else {
        setScore(score - 1)
      }
      setReponse("")
      setGames(games + 1)
    }
  }

  return (
    <div className="wrapper">
      <form className="display">
        <span>{num1}</span>+ <span>{num2}</span>
        <input onChange={handleInput} autoFocus type="text" value={reponse}/>
        <button onClick={handleCalcul}>Calculer</button>
      </form>
          
      <div className="messages">
        <p>You have played <span id="games">{games}</span> times.</p>
        <hr />
        <p>You have one point after each correct answer.</p>
        <p>Your score is <span id="score">{score}</span></p>
      </div>
    </div>
  )
}

export default App
