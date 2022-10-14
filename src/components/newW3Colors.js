import React, { useState, useEffect } from "react";
// import "./style.css";
import { converted } from "../styles/w3JsColors";

export function NewWeb3Colors() {
  const [showAlert, setShowAlert] = useState(false);

  function copyColor(item, evt) {
    console.log(item);
    console.log(converted[item]);
    let selectedItem = converted[item].backgroundColor;
    navigator.clipboard.writeText(selectedItem);
    setShowAlert(true);
    setTimeout(function () {
      setShowAlert(false);
    }, 3000);
  }

  const elements = Object.keys(converted).map(function (item, index) {
    return (
      <div
        onClick={(evt) => copyColor(item, evt)}
        key={index.toString()}
        style={{
          backgroundColor: converted[item].backgroundColor,
          height: 100,
        }}
      >
        <span>
          {item} <br /> {converted[item].backgroundColor}{" "}
        </span>
      </div>
    );
  });

  return (
    <div className="container-new-w3">
      {showAlert && (
        <div
          style={{
            padding: 10,
            position: "fixed",
            backgroundColor: "#FFFEA1",
            top: 100,
            right: 100,
            borderRadius: 5,
            fontSize: 16,
          }}
        >
          {" "}
          <span> Copied </span>{" "}
        </div>
      )}

      {elements}
    </div>
  );
}
