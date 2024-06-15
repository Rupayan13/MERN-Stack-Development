import React from "react";
import ReactDOM from "react-dom";

//Via React
//Reander method is only taking a single elemet
ReactDOM.render(
  <div>
    <h1>Hello World</h1>
    <p>This is the paragraph</p>
  </div>,
  document.getElementById("root")
);

//Via pure javascript
var h1 = document.createElement("h1");
h1.innerHTML = "Hello World";
document.getElementById("root").appendChild(h1);
