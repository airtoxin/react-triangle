import React from "react";
import ReactDom from "react-dom";
import Triangle from "../lib";

let prev = {
    x: 50,
    y: 50,
    direction: "up",
    size: 50
};

const Triangles = Array.from(Array(100).keys()).map((i) => {
    prev = Triangle.nextRight(prev);
    return (<Triangle key={i} {...prev} />);
});

ReactDom.render(
    (<svg width="1000px" height="1000px">
        {Triangles}
    </svg>),
    document.getElementById("example")
);
