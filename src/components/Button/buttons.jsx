import React from "react";
import "./Button.css";

function Button(props){
    return(
        <button className= "newBtn">
            {props.children}
        </button>
    );
}

export default Button