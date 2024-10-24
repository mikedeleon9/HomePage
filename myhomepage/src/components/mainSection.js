import React from "react";
import connections from "../Images/Connections.png";
import wordle from "../Images/Wordle.png";
import sudoku from "../Images/Sudoku.png";
import crossword from "../Images/Crossword.png";
import immaculate from "../Images/Immaculate.png";

export default function Main(){
    return(
        <section>
        <div class="middle container">
            <div class="game-list">
                <div class="site"><img class="photo" src={connections} alt="connections"/></div>
                <div class="site"><img class="photo" src={wordle} alt="wordle"/></div>
                <div class="site"><img class="photo" src={sudoku} alt="sudoku"/></div>
               <div class="site"><img class="photo" src={crossword} alt="crossword"/></div>
                <div class="site"><img class="photo" src={immaculate} alt="immaculate"/></div>
            </div>
        </div>
    </section>
    )

}

