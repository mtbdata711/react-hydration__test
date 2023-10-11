import React, { useState } from "react";

export function Component(props) {
    const [greeting, setGreeting] = useState("Hello");

    const toggleGreeting = () => {
        console.log("running...");
        setGreeting(greeting === "Hello" ? "Goodbye" : "Hello");
    }

    return (
        <div>
            <p>{greeting} {props.name}</p>
            <button onClick={toggleGreeting} type="button">Toggle Greeting</button>
        </div>
    )
}
