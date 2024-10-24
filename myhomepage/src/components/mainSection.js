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
            <div class="w-1/2 relative grid grid-cols-3 p-12 gap-6 border border-2">
               <img class="photo w-12" src={connections} alt="connections"/>
               <img class="photo w-12" src={wordle} alt="wordle"/>
               <img class="photo w-12" src={sudoku} alt="sudoku"/>
               <img class="photo w-12" src={crossword} alt="crossword"/>
               <img class="photo w-12" src={immaculate} alt="immaculate"/>
            </div>
        </div>
    </section>
    )

}

