import React, {useEffect, useRef} from "react";
import './MessageArea.css'
import {Message} from "./Message";

function MessageArea(props) {

    /*
      Autoscrolling
     */
    const messagesEndRef = useRef(null)

    useEffect(() => {
        //scroll to bottom when a message is sent or received
        if (props.messages.length > 1) {
            scrollToBottom();
        }
    })

    function scrollToBottom() {
        messagesEndRef.current.scrollIntoView({behavior: "smooth"})
    }

    return (
        <div className="message-area">
            <ul id="messages">
                {props.messages.map((item, i) =>
                    (<Message text={item.text} author={item.author} time={item.time}/>))}
                <li ref={messagesEndRef}/>
            </ul>
        </div>
    )
}

export {MessageArea}