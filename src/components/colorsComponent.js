import react, { useState, useEffect } from "react";
import { colors } from "../components/colors";

const colorElements1 = colors.map(function (item, index) {
  return (
    <div
      style={{
        backgroundColor: item.colors[0],
        height: 100,
        textAlign: "center",
        margin: "1rem",
      }}
    >
      <h2> {item.colors[0]} </h2>
    </div>
  );
});

const colorElements2 = colors.map(function (item, index) {
  return (
    <div
      style={{
        backgroundColor: item.colors[1],
        height: 100,
        textAlign: "center",
        margin: "1rem",
      }}
    >
      <h2> {item.colors[1]} </h2>
    </div>
  );
});

export function ColorsComponent() {
  return (
    <div className="textGradientsContainer">
      {colorElements1}
      {colorElements2}
    </div>
  );
}
