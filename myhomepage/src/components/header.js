import React from "react";

export default function Header(){
    return(
       
    <header>
        <div class="flex justify-between px-24 py-8 align-center bg-customBlue border-b-8 border-customOrange text-white">
        <h1 class="text-2xl"><span class="text-customOrange">My</span> Homepage</h1>
        <nav>
            <ul class="links flex gap-4 cursor-pointer">
                <span class="text-customOrange"><li>Home</li></span>
                <li>Projects</li>
                <li>About</li>
                <li>Contact Me</li>
            </ul>
        </nav>
        </div>
    </header>
      
    )
}