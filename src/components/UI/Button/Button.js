import React from "react";
import "./Button.css"

const Button=(props)=>{
    const classes="button "+props.className;
    return (
        <button type={props.type} onClick={props.onClick} className={classes}>{props.children}</button>
    )
}

export default Button;