import React from "react"; // eslint-disable-line no-unused-vars
import TriangleSupport from "./support";

export class UpTriangle extends TriangleSupport {
    render() {
        const points = this._calcVertexCoord().map((s) => s.join(",")).join(" ");
        return (<polygon points={points} />);
    }

    _calcVertexCoord() {
        const x = this.props.x;
        const y = this.props.y;
        const s = this.props.size;
        const h = Math.sqrt(3) * s / 2;
        return [
            [x, y + h],
            [x + s / 2, y],
            [x + s, y + h]
        ];
    }
}

export class DownTriangle extends TriangleSupport {
    render() {
        const points = this._calcVertexCoord().map((s) => s.join(",")).join(" ");
        return (<polygon points={points} />);
    }

    _calcVertexCoord() {
        const x = this.props.x;
        const y = this.props.y;
        const s = this.props.size;
        const h = Math.sqrt(3) * s / 2;
        return [
            [x, y],
            [x + s / 2, y + h],
            [x + s, y]
        ];
    }
}

export class LeftTriangle extends TriangleSupport {
    render() {
        const points = this._calcVertexCoord().map((s) => s.join(",")).join(" ");
        return (<polygon points={points} />);
    }

    _calcVertexCoord() {
        const x = this.props.x;
        const y = this.props.y;
        const s = this.props.size;
        const w = Math.sqrt(3) * s / 2;
        return [
            [x, y + s / 2],
            [x + w, y],
            [x + w, y + s]
        ];
    }
}

export class RightTriangle extends TriangleSupport {
    render() {
        const points = this._calcVertexCoord().map((s) => s.join(",")).join(" ");
        return (<polygon points={points} />);
    }

    _calcVertexCoord() {
        const x = this.props.x;
        const y = this.props.y;
        const s = this.props.size;
        const w = Math.sqrt(3) * s / 2;
        return [
            [x, y + s],
            [x, y],
            [x + w, y + s / 2]
        ];
    }
}
