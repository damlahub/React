import React from "react";
import ReactDOM from "react-dom/client";

// const Hello = () => {
//     return <h1>Hello World</h1>
// }
// const Hello = () => {
//     return React.createElement('h1',{},'Hello') // element, props, children
// }
const Message = () => {
    return(
    <div>
        {/* <h2>Damla Oksel</h2>
        <p>This is my message</p> */}
        <Name/>
        <UserMessage/>
    </div>
)};

const Name = () => <h2>Damla Oksel</h2>
const UserMessage = () => {
    return <p>This is my message</p>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
//  <Hello /> 
<Message/>
);