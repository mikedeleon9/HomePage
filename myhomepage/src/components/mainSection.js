import React from "react";
import connections from "../Images/Connections.png";
import wordle from "../Images/Wordle.png";
import sudoku from "../Images/Sudoku.png";
import crossword from "../Images/Crossword.png";
import immaculate from "../Images/Immaculate.png";


export default function Main(){
    return(
        <section>
        <div class="middle container ">
            <div class="w-1/2 relative grid grid-cols-2 p-12 gap-6 border-4">
                <div class="site"><img class="photo w-12" src={connections} alt="connections"/>NYT Connections</div>
                <div class="site"><img class="photo w-12" src={wordle} alt="wordle"/>Wordle</div>
                <div class="site"><img class="photo w-12" src={sudoku} alt="sudoku"/>Daily Killer Sudoku</div>
               <div class="site"><img class="photo w-12" src={crossword} alt="crossword"/>NYT Crossword Puzzle</div>
                <div class="site"><img class="photo w-12" src={immaculate} alt="immaculate"/>Immaculate Grid</div>
            </div>
        </div>
    </section>
    )

}

