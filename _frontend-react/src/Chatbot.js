import React, {useEffect, useState} from "react";
import './Chatbot.css';

import {Header} from "./Header";
import {UserInput} from "./UserInput";
import {MessageArea} from "./MessageArea";

import {io} from "socket.io-client";
const socket = io("ws://localhost:5000");

function Chatbot() {
    /*
    Render current time
    */
    const currentTime = new Date().toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
    });

    /*
      Handle messages
     */
    const [messages, setMessages] = useState([{
        text: "Hello, i am the Internet Technologies Chatbot, how can i help you?",
        author: "Clementine",
        time: currentTime
    }]);

    useEffect(() => {
        //if last message is a non-empty question, ask the server
        let lastMessage = messages[messages.length - 1]
        if (lastMessage.text !== "" && lastMessage.author === "you") {
            socket.emit('question', lastMessage.text);
        }

        //handle server responses
        socket.on("answer", (data) => {
            setMessages([...messages, {text: data, author: "Clementine", time: currentTime}])
        });

    }, [messages]);

    function onSubmitMessage(inputText) {
        setMessages([...messages, {text: inputText,
                                        author: "you",
                                        time: currentTime
        }])
    }

    /*
      Render HTML
    */
    return (
        <div className="App">
            <div className="chat_window">
                <Header />
                <MessageArea messages={messages} />
                <UserInput onSubmitMessage={onSubmitMessage} />
            </div>
        </div>
    );
}

export default Chatbot;
