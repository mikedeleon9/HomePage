import React from "react";
import connections from "../Images/Connections.png";
import wordle from "../Images/Wordle.png";
import sudoku from "../Images/Sudoku.png";
import crossword from "../Images/Crossword.png";
import immaculate from "../Images/Immaculate.png";


export default function Main(){
    return(
    <section class="flex justify-center p-4">
        <div class="middle container flex justify-center grid grid-cols-2 ">
            <div class="relative grid grid-cols-3 p-12 gap-6 max-sm:grid-cols-1 border-2 max-lg:grid-cols-3 max-xl:grid-cols-4">
            <a href="https://www.nytimes.com/games/connections" target="_blank"><div class="site"><img class="photo w-12 " src={connections} alt="connections"/>NYT Connections</div></a>
            <a href="https://www.nytimes.com/games/wordle/index.html" target="_blank"><div class="site"><img class="photo w-12" src={wordle} alt="wordle"/>Wordle</div></a>
            <a href="https://www.dailykillersudoku.com/" target="_blank"><div class="site"><img class="photo w-12" src={sudoku} alt="sudoku"/>Daily Killer Sudoku</div></a>
            <a href="https://www.nytimes.com/crosswords" target="_blank"><div class="site"><img class="photo w-12" src={crossword} alt="crossword"/>NYT Crossword Puzzle</div></a>
            <a href="https://www.immaculategrid.com/" target="_blank"><div class="site"><img class="photo w-12" src={immaculate} alt="immaculate"/>Immaculate Grid</div></a>
            </div>

           <div class="relative grid grid-cols-3 p-12 gap-6 border-2 max-sm:grid-cols-1 border-2 max-lg:grid-cols-3 max-xl:grid-cols-4">
        <a href="https://www.nytimes.com/games/connections" target="_blank"><div class="site"><img class="w-8 sm:w-10 md:w-12" src={connections} alt="connections"/>NYT Connections</div></a>
            <a href="https://www.nytimes.com/games/wordle/index.html" target="_blank"><div class="site"><img class="photo w-12" src={wordle} alt="wordle"/>Wordle</div></a>
            <a href="https://www.dailykillersudoku.com/" target="_blank"><div class="site"><img class="photo w-12" src={sudoku} alt="sudoku"/>Daily Killer Sudoku</div></a>
            <a href="https://www.nytimes.com/crosswords" target="_blank"><div class="site"><img class="photo w-12" src={crossword} alt="crossword"/>NYT Crossword Puzzle</div></a>
            <a href="https://www.immaculategrid.com/" target="_blank"><div class="site"><img class="photo w-12" src={immaculate} alt="immaculate"/>Immaculate Grid</div></a>
        </div> 
        </div>

       
    </section>
    )

}

