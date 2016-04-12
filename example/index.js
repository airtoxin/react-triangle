import React from "react";
import ReactDom from "react-dom";
import Triangle from "../lib";

ReactDom.render(
    (<svg width="1000px" height="1000px">
        <Triangle />
        <Triangle pointTop={false} />
    </svg>),
    document.getElementById("example")
);