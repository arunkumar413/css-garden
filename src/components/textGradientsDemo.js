import React, { useState, useEffect, useRef } from "react";
import textGradients from "../styles/textGradients.module.css";

const gradientDivStyle = {
  boxShadow:
    "rgba(0, 0, 0, 0.05) 0px 0px 0px 0.5px, rgb(209, 213, 219) 0px 0px 0px 0.5px inset",
  borderRadius: 10,
  textAlign: "center",
  padding: 5,
  margin: 5,
};

export function TextGradientsDemo(props) {
  var elements = Object.keys(textGradients).map(function (e, i) {
    return (
      <div key={i.toString()} style={gradientDivStyle}>
        <h1 className={textGradients[e]}>{"." + e}</h1>
      </div>
    );
  });

  return (
    <div>
      <div className="textGradientsContainer">{elements}</div>
    </div>
  );
}
