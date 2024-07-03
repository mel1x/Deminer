

function GameInfo({ gameResult, openedCells, minesCount, changeMinesCount, score, resetGameHandler }) {

    return  <div className="gamePanel">
                <h2>Game Info</h2>
                <div className="gameInfo">
                  {gameResult !== null? gameResult == "win"? <div className="statInfo correct">Win !</div> : <div className="statInfo incorrect">Game Over !</div>: ''}
                  <div className="statInfo">Opened Cells : {openedCells}</div>
                  <div className="statInfo">Free Cells : {36 - minesCount - openedCells}</div>
                  <div className="statInfo">Mines: {minesCount} <button className='mineControlBut' onClick={() => {changeMinesCount(1)}}><i className='bx bx-plus' ></i></button><button className='mineControlBut' onClick={() => {changeMinesCount(-1)}}><i className='bx bx-minus' ></i></button></div>
                </div>
                <div className="gameStat">
                  <div className="scoreInfo">Score: {score}</div>
                  <button className="resetButton" onClick={resetGameHandler}>Reset</button>
                </div>
            </div>
}

export default GameInfo