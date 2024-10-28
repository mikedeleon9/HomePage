import React from "react";
import connections from "../Images/Connections.png";
import wordle from "../Images/Wordle.png";
import sudoku from "../Images/Sudoku.png";
import crossword from "../Images/Crossword.png";
import immaculate from "../Images/Immaculate.png";
import CSSBattle from "../Images/CSSBattle.png";
import Codepen from "../Images/Codepen.png";
import Tailwind from "../Images/Tailwind.png"
import Github from "../Images/Github.png";
import W3Schools from "../Images/w3Schools.png"
import ChatGPT from "../Images/ChatGPT.png"
import Sidebar from './Sidebar';

export default function Main(){
    return(
    <section class="flex gap-8 px-24 py-8">
        
        <Sidebar />
        <div class="middle container  w-2/3 flex flex-col  ">
       
            <div class="relative grid grid-cols-3 p-6 gap-6 max-sm:grid-cols-1 border-2 border-customOrange max-lg:grid-cols-2 max-xl:grid-cols-3 mb-10"> 
            <a href="https://www.nytimes.com/games/connections" target="_blank"><div class="site game"><img class="photo w-12 " src={connections} alt="connections"/>Connections</div></a>
            <a href="https://www.nytimes.com/games/wordle/index.html" target="_blank"><div class="site game"><img class="photo w-12" src={wordle} alt="wordle"/>Wordle</div></a>
            <a href="https://www.dailykillersudoku.com/" target="_blank"><div class="site game"><img class="photo w-12" src={sudoku} alt="sudoku"/>Daily Killer Sudoku</div></a>
            <a href="https://www.nytimes.com/crosswords" target="_blank"><div class="site game"><img class="photo w-12" src={crossword} alt="crossword"/>NYT Crossword</div></a>
            <a href="https://www.immaculategrid.com/" target="_blank"><div class="site game"><img class="photo w-12" src={immaculate} alt="immaculate"/>Immaculate Grid</div></a>
            </div>
        <span class="font-bold">Coding</span>
           <div class="relative grid grid-cols-3 p-6 gap-6 border-2 max-sm:grid-cols-1 border-2 border-customOrange max-lg:grid-cols-3 max-xl:grid-cols-4">
        <a href="https://cssbattle.dev/" target="_blank"><div class="site code"><img class="photo w-12" src={CSSBattle} alt="CSS-Battle"/>CSS Battle</div></a>
            <a href="https://codepen.io/your-work/" target="_blank"><div class="site code"><img class="photo w-12" src={Codepen} alt="codepen"/>Codepen</div></a>
            <a href="https://tailwindcss.com/" target="_blank"><div class="site code"><img class="photo w-12" src={Tailwind} alt="tailwind"/>Tailwind CSS</div></a>
            <a href="https://github.com/mikedeleon9" target="_blank"><div class="site code"><img class="photo w-12" src={Github} alt="Github"/>Github </div></a>
            <a href="https://www.w3schools.com/" target="_blank"><div class="site code"><img class="photo w-12" src={W3Schools} alt="W3Schools"/>W3 Schools</div></a>
            <a href="https://chatgpt.com/" target="_blank"><div class="site code"><img class="photo w-12" src={ChatGPT} alt="ChatGPT"/>ChatGPT </div></a>
        </div> 
        </div>

       
    </section>
    )

}

