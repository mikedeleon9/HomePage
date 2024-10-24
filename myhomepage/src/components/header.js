import React from "react";

export default function Header(){
    return(
       
    <header>
        <div class="flex justify-between px-8 py-4">
        <h1><span>My</span> Homepage</h1>
        <nav>
            <ul class="links">
                <span><li>Home</li></span>
                <li>Projects</li>
                <li>About</li>
                <li>Contact Me</li>
            </ul>
        </nav>
        </div>
    </header>
      
    )
}