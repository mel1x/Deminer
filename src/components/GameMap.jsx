

function GameMap({ showGameMap, gamePlan }) {

    return  showGameMap? (<div className="gameMap" data-aos="fade-left">
                           <h2>Game Map</h2>
                           <div className="gameMiniMap">
                             {gamePlan.map((elem, index) => (
                               <div key={index} className={elem == "free"? "miniMapCell free" : "miniMapCell bomb"}></div>
                             ))}
                           </div>
                          </div>) : ''
}

export default GameMap