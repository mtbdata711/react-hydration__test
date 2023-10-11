import React, { useState } from "react";
export function Component(props) {
  const [greeting, setGreeting] = useState("Hello");
  const toggleGreeting = () => {
    setGreeting(greeting === "Hello" ? "Goodbye" : "Hello");
  };
  return React.createElement("div", null, React.createElement("p", null, greeting, " ", props.name), React.createElement("button", {
    onClick: toggleGreeting,
    type: "button"
  }, "Toggle Greeting"));
}
