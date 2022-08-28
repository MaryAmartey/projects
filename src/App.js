import React from "react";
import TicTacToe from "./components/tictactoe/Tictactoe.jsx"
import MemeGene from "./components/memeGene/MemeGene.jsx"

import {
  Routes,
  Route,
} from "react-router-dom";


export default function App() {
  return (
    <div>
      <Routes>
         <Route path ='/' element = {<TicTacToe/>}/>
         <Route path ='/memeGene' element = {<MemeGene/>}/>
      </Routes>
      
    </div>
  )
}

