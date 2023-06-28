import React from "react";
import './Message.css'

function Message(props) {

    return (
        <li className={props.author === "you" ? "you" : "other"}>
            {/*<div className="avatar"/>*/}
            {/*<div className="text_wrapper">*/}
            {/*    <div className="text">{props.text}</div>*/}
            {/*</div>*/}
            <div className="message" id={props.author === "you" ? "you" : "other"}>
                <div className="message-box">
                    <div className="message-content">
                        <p>{props.text}</p>
                    </div>
                    <div className="message-meta">
                        <p id="time">{props.time}</p>
                        <p id="author">{props.author}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export {Message}