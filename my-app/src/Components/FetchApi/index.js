// useeffect to get meme data
import React from "react";
import { useState, useEffect } from "react";

function Memes() {
    async function loadMeme() {
        setIsLoading (true);
        await fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => {
            setMemes([...memes, data])
            setIsLoading(false)
            });

    }

    const [memes, setMemes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        loadMeme();
    }, []);

    if (memes.length === 0){
        return <p>Loading...</p>
    }

    return (
        <div>
        <ul>
            {memes.map((meme) => {
                return <li key={meme.key}>{meme.meme}</li>
            })}
        </ul>
        <button disabled={isLoading} onClick={loadMovie}>Random Meme</button>
        </div>

    );

}
export default Memes 