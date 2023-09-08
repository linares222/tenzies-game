
import React from 'react';
import Dice from './components/Dice';
import './App.css';

function App() {
  const [dicesArray, setDicesArray]= React.useState([
    {id: 1, isFreezed: false, number: Math.floor(Math.random() * 6) + 1},
    {id: 2, isFreezed: false, number: Math.floor(Math.random() * 6) + 1},
    {id: 3, isFreezed: false, number: Math.floor(Math.random() * 6) + 1},
    {id: 4, isFreezed: false, number: Math.floor(Math.random() * 6) + 1},
    {id: 5, isFreezed: false, number: Math.floor(Math.random() * 6) + 1},
    {id: 6, isFreezed: false, number: Math.floor(Math.random() * 6) + 1},
    {id: 7, isFreezed: false, number: Math.floor(Math.random() * 6) + 1},
    {id: 8, isFreezed: false, number: Math.floor(Math.random() * 6) + 1},
    {id: 9, isFreezed: false, number: Math.floor(Math.random() * 6) + 1},
    {id: 10, isFreezed: false, number: Math.floor(Math.random() * 6) + 1}
  ]) 
  const [win, setWin]= React.useState(false)
  const [nrOfPlays, setNrOfPlays] = React.useState(0)
  const [bestScore, setBestScore] = React.useState(22)
console.log("rendered")
  //useEffect sempre que o HS mudar
  function rollDice(){
    setDicesArray(oldDicesArray=>oldDicesArray.map(dice=>{
      if(!dice.isFreezed){
        return {...dice,
        number: Math.floor(Math.random() * 6) + 1}
      }else{
        return dice
      }
    }))
    setNrOfPlays(prev=>prev+1)
  }
  function toggleFreeze(diceId){
    setDicesArray(oldDicesArray=>oldDicesArray.map(dice=>{
      if(dice.id===diceId){
        return {...dice,
        isFreezed: !dice.isFreezed}
      }else{
        return {...dice}
      }
    }))
  }

  React.useEffect(() => {
    const freezedNumbers = dicesArray
    .filter((dice) => dice.isFreezed)
    .map((dice) => dice.number);
  if (freezedNumbers.length === 10 && new Set(freezedNumbers).size === 1) {
    setWin(prev=> !prev);
  };
  }, [dicesArray]);

  const allDices= dicesArray.map( dice => { return(
    <Dice key={dice.id}
    id={dice.id}
    isFreezed={dice.isFreezed}
    number={dice.number}
    toggleFreeze={toggleFreeze}
    />)
  }
  )
  function restart(){
    setWin(prev=>!prev)
    setNrOfPlays(0)
    
  }

  return (
    win ?
     <main className='windiv'>
    <h1 >YOU WON</h1>
    <p>Number of plays: <span class="nrofplays">{nrOfPlays}</span></p>
    <div className='restart button' onClick={restart}>RESTART</div>
    </main> :
     <main>
        <p class="highscoreDiv">Best score: {bestScore}</p>
      <div className='Text'>
        <h1>Tenzies</h1>
        <p>Number of plays: <span class="nrofplays">{nrOfPlays}</span></p>
      </div>
      <div className='dices'>
        {allDices}
      </div>
      <div className='button' onClick={rollDice}>Roll</div>
    </main>
    
  );
}

export default App;
