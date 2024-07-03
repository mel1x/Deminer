

function GameField({ field, openCellHandler }) {

    return  <div className="gameField">
                {field.map((elem, index) => (
                  <div key={index} className={elem !== null? elem == "free"? "gameCell correct" : "gameCell incorrect" : "gameCell"} onClick={() => openCellHandler(index)}>{elem !== null? elem == "free"? <i className='bx bx-badge-check' ></i> : <i className='bx bxs-bomb' ></i> : null}</div>
                ))}
            </div>
}

export default GameField