import React from "react";
import ReactDom from "react-dom";
import Triangle from "../lib";

ReactDom.render(
    (<svg width="1000px" height="1000px">
        <Triangle />
        <Triangle direction="down" />
        <Triangle direction="left" />
        <Triangle direction="right" />
    </svg>),
    document.getElementById("example")
);
