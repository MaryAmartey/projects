import React from "react"
import { useState, useEffect} from "react"
import Navbar from "../navbar/Navbar"
import '../memeGene/memeGene.css'


export default function MemeGene(){
    /*const [memeImage, setMemeImage] =useState("https://drive.google.com/uc?id=0B9o1MNFt5ld1N3k1cm9tVnZxQjg")*/
    
    const [allMemes, setAllMemes] = useState([])

    /* http://i.imgflip.com/lbij.jpg
    https://api.imgflip.com/get_memes*/
    
    useEffect(()=>{
        async function getMemes(){
            const response = await fetch("https://api.imgflip.com/get_memes")
            const data = await response.json()
            setAllMemes(data.data.memes)
        }
    
        getMemes()

    },[])

    
    const [meme, setMeme ]= useState({
        topText:"Come on inner peace",
        bottomText:"I don't have all day",
        randomImage:"https://drive.google.com/uc?id=0B9o1MNFt5ld1N3k1cm9tVnZxQjg",
    })

    function getMemeImg() {
        const randomNum = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNum].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    const TopText = document.querySelector("topText")
    console.log(TopText)
    const handleChange=(e)=>{
        const {name, value} = e.target
        setMeme(prevMeme =>({
            ...prevMeme,
            [name]:value
        }))
    }
    
    return(
        <>
        <Navbar color="purple" projectName="Meme Generator" nextProject="Tictactoe" 
        linkname="/"/>
        
            <main>
            <div className="form">
                <input  type="text"
                        placeholder="top-text"
                        className="formInput"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                        />
                <input  type="text"
                        placeholder="bottom-text"
                        className="formInput"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                        />

                <button className="formButton"  
                        onClick={getMemeImg}
                > Get a new meme Image</button>
            </div>
      
            <div className="meme">
                <img src={meme.randomImage} className="meme--img"/>
                <h1 className="memetext  top">{meme.topText}</h1>
                <h1 className="memetext  bottom">{meme.bottomText} </h1>
            </div>
            </main>
        
        </>
    )
}

