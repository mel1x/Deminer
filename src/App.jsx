
import { useEffect } from 'react';
import useGameLogic from './customHooks/useGameLogic';
import GameMap from './components/GameMap';
import GameField from './components/GameField';
import GameInfo from './components/GameInfo';
import '@stefanjudis/sparkly-text'
import './App.css'


function App() {
  const {
    minesCount,
    openedCells,
    gameResult,
    score,
    field,
    gamePlan,
    showGameMap,
    changeMinesCount,
    openCellHandler,
    resetGameHandler,
    handleKeyPress,
    setGamePlan,
    generateField
  } = useGameLogic();


  useEffect(() => {
    setGamePlan(generateField(minesCount));
  }, [minesCount, setGamePlan]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  
  return (
    <>
      <h1>Deminer <sparkly-text>Game</sparkly-text></h1>
      <div className="mainZone" data-aos="fade-up">
        <GameMap showGameMap={showGameMap} gamePlan={gamePlan} />
        <GameField field={field} openCellHandler={openCellHandler} />
        <GameInfo gameResult={gameResult} openedCells={openedCells} minesCount={minesCount} changeMinesCount={changeMinesCount} score={score} resetGameHandler={resetGameHandler} />
      </div>
    </>
  )
}

export default App