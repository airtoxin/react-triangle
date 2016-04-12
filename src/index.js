import React from "react"; // eslint-disable-line no-unused-vars
import TriangleSupport from "./support";
import {PointTopTriangle, LineTopTriangle} from "./triangles";

export default class Triangle extends TriangleSupport {
    render() {
        return this.props.pointTop ?
            <PointTopTriangle {...this.props} /> :
            <LineTopTriangle {...this.props} />;
    }
}
