import React from "react";

export default function Button(props){
    
    return (
    <div>
        <button className="button" onClick={props.onClick}>
        <text className="text">Get Random Meme</text>
        </button>
    </div>
    )
}