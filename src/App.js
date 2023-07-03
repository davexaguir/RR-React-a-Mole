import { useState } from "react";
import MoleContainer from "./components/MoleContainer.js";
import './App.css';

function App() {
  let [score, setScore] = useState(0)

  const creatMoleHill = () => {
    let hills = []
    for(let i = 0; i < 9; i++){
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} /> )
    }
    return (
      <div>
        { hills }
      </div>
    )
  }

  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      {score}
      {creatMoleHill()}
    </div>
  );
}

export default App;
