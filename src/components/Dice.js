import React from "react";

export default function Dice(props){
    return(
        <div className={props.isFreezed ? "freezed" : "unfreezed"} onClick={()=>props.toggleFreeze(props.id)}>
            <h1>{props.number}</h1>
        </div>
    )
    
}