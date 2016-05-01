import assert from "assert";
import React from "react";
import fnName from "fn-name";
import {shallow} from "enzyme";
import {
    UpTriangle,
    DownTriangle,
    LeftTriangle,
    RightTriangle
} from "../src/triangles";

describe(__filename, () => {
    describe("common", () => {
        [UpTriangle, DownTriangle, LeftTriangle, RightTriangle].forEach((Triangle) => {
            describe(fnName(Triangle), () => {
                let c = null;
                let w = null;
                beforeEach(() => {
                    c = <Triangle/>;
                    w = shallow(c);
                });

                it("should be React component", () => {
                    assert(React.isValidElement(c));
                });

                it("should actual have been polygon element", () => {
                    assert(w.find("polygon"));
                });

                it("should have three points props", () => {
                    assert(w.find("polygon").prop("points").split(" ").length === 3);
                });

                it("should pass through non-used props", () => {
                    c = <Triangle
                        a="this is a"
                        b={1}
                        c={{obj:true}}
                        className="sample-class"
                    />
                    w = shallow(c);

                    assert(w.props().a === "this is a");
                    assert(w.props().b === 1);
                    assert(w.props().c.obj === true);
                    assert(w.hasClass("sample-class"));
                });

                it("should manage events", () => {
                    let called = false;
                    const handleClick = () => called = true;
                    c = <Triangle
                        onClick={handleClick}
                    />
                    w = shallow(c);

                    w.simulate("click");
                    assert(called === true);
                });
            });
        });
    });
});
