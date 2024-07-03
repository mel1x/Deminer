import useFieldGenerator from '../customHooks/useFieldGenerator';
import { useState } from 'react';

function useGameLogic() {
  const generateField = useFieldGenerator();

  const [minesCount, setMinesCount] = useState(4);
  const [openedCells, setOpenedCells] = useState(0);
  const [gameResult, setGameResult] = useState(null);
  const [score, setScore] = useState(0);
  const [field, setField] = useState(Array(36).fill(null));
  const [gamePlan, setGamePlan] = useState([]);

  const [showGameMap, setShowGameMap] = useState(false);
  const [inputCode, setInputCode] = useState('');


  const openCellHandler = (elemIndex) => {
    if (gameResult !== null || field[elemIndex] !== null) { return }

    const newOpenedCells = openedCells + 1;
    const newGameResult = calculateGameResult(gamePlan[elemIndex], newOpenedCells);

    const newScore = gamePlan[elemIndex] !== "bomb"? Math.round(score + 1*(openedCells+1)*(minesCount/36)*100) : score;

    const newField = [...field];
    newField[elemIndex] = gamePlan[elemIndex];

    setGameResult(newGameResult);
    setOpenedCells(newOpenedCells);
    setField(newField);
    setScore(newScore);
  }

  const changeMinesCount = (amount) => {
    const newMinesCount = minesCount + amount;

    if (newMinesCount < 1 || newMinesCount > 35) {
      return;
    }
    
    setMinesCount(newMinesCount);
    resetGameHandler();
  }

  const handleKeyPress = (event) => {
    setInputCode(prevCode => {
      const newCode = (prevCode + event.key).slice(-6);
      if (newCode === 'devmap') {
        setShowGameMap(true);
      }
      return newCode;
    });
  };

  const resetGameHandler = () => {
    setGameResult(null);
    setScore(0);
    setOpenedCells(0);
    setGamePlan(generateField(minesCount));
    setField(Array(36).fill(null));
  }

  const calculateGameResult = (cellData, openedCells) => {
    if (cellData === "bomb") {
      return "lose";
    } else if (openedCells === 36 - minesCount) {
      return "win";
    }
    return null;
  }

    return {
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
    }
}

export default useGameLogic