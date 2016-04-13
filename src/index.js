import React from "react"; // eslint-disable-line no-unused-vars
import TriangleSupport from "./support";
import * as Triangles from "./triangles";

export default class Triangle extends TriangleSupport {
    render() {
        const camel = this.props.direction.substring(0, 1).toUpperCase() + this.props.direction.substring(1);
        const T = Triangles[`${camel}Triangle`];
        return <T {...this.props} />;
    }
}
