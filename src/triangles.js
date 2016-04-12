import React from "react"; // eslint-disable-line no-unused-vars
import TriangleSupport from "./support";

export class PointTopTriangle extends TriangleSupport {
    render() {
        const points = this._calcVertexCoord().map((s) => s.join(",")).join(" ");
        return (<polygon points={points} />);
    }

    _calcVertexCoord() {
        const ox = this.props.offsetX;
        const oy = this.props.offsetY;
        const sz = this.props.size;
        const y = Math.sqrt(3) * sz / 2;
        return [
            [ox, oy + y],
            [ox + sz / 2, oy],
            [ox + sz, oy + y]
        ];
    }
}

export class LineTopTriangle extends TriangleSupport {
    render() {
        const points = this._calcVertexCoord().map((s) => s.join(",")).join(" ");
        return (<polygon points={points} />);
    }

    _calcVertexCoord() {
        const ox = this.props.offsetX;
        const oy = this.props.offsetY;
        const sz = this.props.size;
        const y = Math.sqrt(3) * sz / 2;
        return [
            [ox, oy],
            [ox + sz / 2, oy + y],
            [ox + sz, oy]
        ];
    }
}
