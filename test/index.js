import assert from "assert";
import is from "is";
import React from "react";
import Triangle, * as exported from "../src/index.js";

describe(__filename, () => {
    describe("Triangle", () => {
        it("should be React component", () => {
            assert(React.isValidElement(<Triangle/>));
        });
    });

    describe("exported", () => {
        it("should export TriangleGenerator class", () => {
            assert(is.function(exported.TriangleGenerator));
        });
    });
});
