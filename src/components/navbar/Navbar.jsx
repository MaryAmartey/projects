import React from "react";
import ".//navbar.css"
import {HiDocument} from "react-icons/hi"
import { Link } from "react-router-dom";

export default function Navbar(props){
    
    //<Link to="/memeGene">Meme Generator</Link> 
    return(
        <>
        <nav className="header" style={{backgroundColor: props.color}}>
            <div className="nav-wrapper">
                <div className="nav-link-wrapper left-side">
                    <p>{props.projectName}
                    <Link className="projLink" to={props.linkname}>{props.nextProject}</Link> </p>
                </div>

                <p className="right-side signature">MARY AMARTEY </p>
                
            </div>
        </nav>
   
        <div className="navPrimary">
            <HiDocument style={{color:"purple",fontSize:"1.2rem", paddingTop:"0.05rem"}}/>
           <a href="https://mksportfolio.netlify.app" style={{color:"purple"}}>View Portfolio</a>
        </div>
        </>
    )
}