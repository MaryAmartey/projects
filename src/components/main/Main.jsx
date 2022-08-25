import React from "react"
import ".//main.css"
import { useState } from "react"
import Navbar from "../navbar/Navbar"


export default function Main(){
    const X_CLASS='x'
    const CIRCLE_CLASS ='circle'
    const winMsgElement = document.getElementById('winningMessage')
    const winMsgText = document.querySelector('[data-winning-msg-text]')
    const restartBtn = document.getElementById('restartButton')
    const [circleTurn, setCircleTurn] = useState(false)
    const wincombo=[
        [0, 1, 2] , [3, 4, 5] , [6, 7, 8] , [0, 3, 6],
        [1, 4, 7] , [2, 5, 8] , [0, 4, 8] , [2, 4, 6]
    ]


    
    const changeTurn =  () =>{
        setCircleTurn(!circleTurn)
    }
    
    const handleClick = e =>{
        const cell= e.target
       
        if(!(cell.classList.contains(X_CLASS)|| 
            cell.classList.contains(CIRCLE_CLASS))){
            const curClass= circleTurn ? CIRCLE_CLASS : X_CLASS;
            placeMark(cell, curClass)

        if (checkWin(curClass)){
            console.log("winner")
            endGame(false)
        }
        else if(isDraw()){
            endGame(true)
        }
        else{
            changeTurn()
            updateHover(curClass)
        }
    }
}

    function endGame(draw){
        if(draw){
            winMsgText.innerText = 'Draw!'
        }
        else{
            winMsgText.innerText =`${circleTurn ? "O's" : "X's"} Wins!`
        }
        winMsgElement.classList.add('show')
    }

    function isDraw(){
        const cellElements = Array.from(document.querySelectorAll('[data-cell]'))
        return cellElements.every(cell =>{
            return cell.classList.contains(X_CLASS) ||
            cell.classList.contains(CIRCLE_CLASS)
        })
    }

    function placeMark(cell, curClass){
        cell.classList.add(curClass)
    }


    function updateHover(curClass){
        const board = document.getElementById('board')
        board.classList.remove(curClass)
        if(!circleTurn){
            board.classList.add(CIRCLE_CLASS)
        }
        else{
            board.classList.add(X_CLASS)
        }
    }
    
    function checkWin(curClass){
        const cellElements = Array.from(document.querySelectorAll('[data-cell]'))
        return wincombo.some(combo =>{
            return combo.every(index =>{
                return cellElements[index].classList.contains(curClass)
            })
        })
    }

    if(restartBtn !=null){
    restartBtn.addEventListener('click', ()=>{
        window.location.reload()
    })
}
    
    return(
    <>
    <Navbar color="aquamarine"/>
    <div className="board x" id="board" onClick={handleClick}>
        <div className="cell" data-cell></div>
        <div className="cell" data-cell></div>
        <div className="cell" data-cell></div>
        <div className="cell" data-cell></div>
        <div className="cell" data-cell></div>
        <div className="cell" data-cell></div>
        <div className="cell" data-cell></div>
        <div className="cell" data-cell></div>
        <div className="cell" data-cell></div>
    </div>
    <div className="winning-msg" id="winningMessage">
        <div data-winning-msg-text> X Wins!</div>
        <button id="restartButton"> Restart</button>
    </div>

    </>
);
}