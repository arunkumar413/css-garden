import logo from "./logo.svg";
import "./App.css";
import { GradientsDemo } from "./components/gradients";
import { TextGradientsDemo } from "./components/textGradientsDemo";
import { Web3Colors } from "./components/web3colors";
import { ColorsComponent } from "./components/colorsComponent";
import { useState } from "react";
import { colors } from "./components/colors";
import { NewWeb3Colors } from "./components/newW3Colors";

function App() {
  const [selComponent, setSelComponent] = useState("text-gradients");

  function switchComponent(evt, item) {
    debugger;
    setSelComponent(item);
  }

  var items = {
    "text-gradients": <TextGradientsDemo />,
    "w3-colors": <Web3Colors />,
    "gradients-demo": <GradientsDemo />,
    colors: <ColorsComponent />,
    newW3colors: <NewWeb3Colors />,
  };

  return (
    <div className="App">
      <nav>
        <ol>
          <li
            onClick={(evt) => switchComponent(evt, "text-gradients")}
            name="text-gradients"
            className="nav-item"
          >
            {" "}
            Text Gradients{" "}
          </li>
          <li
            onClick={(evt) => switchComponent(evt, "w3-colors")}
            name="w3-colors"
            className="nav-item"
          >
            {" "}
            W3 CSS colors
          </li>
          <li
            onClick={(evt) => switchComponent(evt, "gradients-demo")}
            name="gradients-demo"
            className="nav-item"
          >
            {" "}
            GradientsDemo
          </li>
          <li
            onClick={(evt) => switchComponent(evt, "colors")}
            name="colors"
            className="nav-item"
          >
            {" "}
            Colors
          </li>

          <li
            onClick={(evt) => switchComponent(evt, "newW3colors")}
            name="colors"
            className="nav-item"
          >
            {" "}
            new w3 colors
          </li>
        </ol>
      </nav>

      {items[selComponent]}
    </div>
  );
}

export default App;
