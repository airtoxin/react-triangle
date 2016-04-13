import React from "react"; // eslint-disable-line no-unused-vars
import TriangleSupport from "./support";
import * as Triangles from "./triangles";

export default class Triangle extends TriangleSupport {
    constructor(props) {
        super(props);
        const camel = props.direction.substring(0, 1).toUpperCase() + props.direction.substring(1);
        this.T = Triangles[`${camel}Triangle`];
    }
    render() {
        const camel = this.props.direction.substring(0, 1).toUpperCase() + this.props.direction.substring(1);
        const T = Triangles[`${camel}Triangle`];
        return <T {...this.props} />;
    }
    static nextLeft(opts) {
        const camel = opts.direction.substring(0, 1).toUpperCase() + opts.direction.substring(1);
        return Triangles[`${camel}Triangle`].nextLeft(opts);
    }
    static nextRight(opts) {
        const camel = opts.direction.substring(0, 1).toUpperCase() + opts.direction.substring(1);
        return Triangles[`${camel}Triangle`].nextRight(opts);
    }
    static nextTop(opts) {
        const camel = opts.direction.substring(0, 1).toUpperCase() + opts.direction.substring(1);
        return Triangles[`${camel}Triangle`].nextTop(opts);
    }
    static nextDown(opts) {
        const camel = opts.direction.substring(0, 1).toUpperCase() + opts.direction.substring(1);
        return Triangles[`${camel}Triangle`].nextDown(opts);
    }
}
