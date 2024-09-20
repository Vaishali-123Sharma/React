import React from "react";
import ReactDOM from "react-dom/client";

//JSX React Element
const heading3 = <h1>This is heading3</h1>

//React Component
const HeaderComponent = () =>{
    return( 
    <div>
        {heading3}
        <h1>Namaste React Functional Component</h1>
        <h1>second heading</h1>
    </div>
)}

const root = ReactDOM.createRoot((document.getElementById("root")));
root.render(<HeaderComponent/>);