import React, {useState} from "react";
import './UserInput.css'

function UserInput(props) {

    /*
    Handle input text
    */
    const [inputText, setInputText] = useState("")

    function handleChange(e) {
        setInputText(e.target.value)
    }

    function handleSubmit() {
        props.onSubmitMessage(inputText);
        setInputText("");
    }

    return (
        <div className="bottom_wrapper">
                <input className="message_input"
                       value={inputText}
                       onChange={handleChange}
                       placeholder="Type your message here..."
                       onKeyPress={(event) => {
                            event.key === "Enter" && handleSubmit();
                       }}
                />
                <button onClick={handleSubmit}>&#9658;</button>
        </div>
    )
}

export {UserInput}