import React from "react";
import connections from "../Images/Connections.png";
import wordle from "../Images/Wordle.png";
import sudoku from "../Images/Sudoku.png";
import crossword from "../Images/Crossword.png";
import immaculate from "../Images/Immaculate.png";


export default function Main(){
    return(
        <section>
        <div class="middle container border">
            <div class="w-1/2 relative grid grid-cols-3 p-12 gap-6">
                <div class="site"><img class="photo w-12" src={connections} alt="connections"/></div>
                <div class="site"><img class="photo w-12" src={wordle} alt="wordle"/></div>
                <div class="site"><img class="photo w-12" src={sudoku} alt="sudoku"/></div>
               <div class="site"><img class="photo w-12" src={crossword} alt="crossword"/></div>
                <div class="site"><img class="photo w-12" src={immaculate} alt="immaculate"/></div>
            </div>
        </div>
    </section>
    )

}

