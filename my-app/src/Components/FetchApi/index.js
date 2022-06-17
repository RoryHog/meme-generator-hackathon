// useeffect to get meme data
import React from "react";
import { useState, useEffect } from "react";
import Button from "../Button";

 export default function Meme() {
    const [meme, setMeme] = useState({
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setallMemes] = useState([]) 
   
    useEffect(() => {
        async function fetchMyAPI(){
            let response = await fetch("https://api.imgflip.com/get_memes")
            let data = await response.json()
            let array = data.data.memes
            setallMemes(array)
            return array;
        }

        fetchMyAPI()
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme({randomImage: url})
        
    }
    

    return (
        <>
        <Button onClick={getMemeImage}/>
        <img className="image" src={meme.randomImage} alt={meme.name} />
        </>
    )
 }