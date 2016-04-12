import React from "react"; // eslint-disable-line no-unused-vars
import TriangleSupport from "./support";

export class UpTriangle extends TriangleSupport {
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

export class DownTriangle extends TriangleSupport {
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

export class LeftTriangle extends TriangleSupport {
    render() {
        const points = this._calcVertexCoord().map((s) => s.join(",")).join(" ");
        return (<polygon points={points} />);
    }

    _calcVertexCoord() {
        const ox = this.props.offsetX;
        const oy = this.props.offsetY;
        const sz = this.props.size;
        const x = Math.sqrt(3) * sz / 2;
        return [
            [ox, oy + sz / 2],
            [ox + x, oy],
            [ox + x, oy + sz]
        ];
    }
}

export class RightTriangle extends TriangleSupport {
    render() {
        const points = this._calcVertexCoord().map((s) => s.join(",")).join(" ");
        return (<polygon points={points} />);
    }

    _calcVertexCoord() {
        const ox = this.props.offsetX;
        const oy = this.props.offsetY;
        const sz = this.props.size;
        const x = Math.sqrt(3) * sz / 2;
        return [
            [ox, oy + sz],
            [ox, oy],
            [ox + x, oy + sz / 2]
        ];
    }
}
