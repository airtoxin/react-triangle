import React from "react"; // eslint-disable-line no-unused-vars
import TriangleSupport from "./support";

export class UpTriangle extends TriangleSupport {
    _calcVertexCoord() {
        const x = this.props.x;
        const y = this.props.y;
        const s = this.props.size;
        const h = Math.sqrt(3) * s / 2;
        return [
            [x - s / 2, y + h / 2],
            [x, y - h / 2],
            [x + s / 2, y + h / 2]
        ];
    }
}

export class DownTriangle extends TriangleSupport {
    _calcVertexCoord() {
        const x = this.props.x;
        const y = this.props.y;
        const s = this.props.size;
        const h = Math.sqrt(3) * s / 2;
        return [
            [x - s / 2, y - h / 2],
            [x, y + h / 2],
            [x + s / 2, y - h /2]
        ];
    }
}

export class LeftTriangle extends TriangleSupport {
    _calcVertexCoord() {
        const x = this.props.x;
        const y = this.props.y;
        const s = this.props.size;
        const w = Math.sqrt(3) * s / 2;
        return [
            [x + w / 2, y + s / 2],
            [x - w / 2, y],
            [x + w / 2, y - s / 2]
        ];
    }
}

export class RightTriangle extends TriangleSupport {
    _calcVertexCoord() {
        const x = this.props.x;
        const y = this.props.y;
        const s = this.props.size;
        const w = Math.sqrt(3) * s / 2;
        return [
            [x - w / 2, y + s / 2],
            [x + w / 2, y],
            [x - w / 2, y - s / 2]
        ];
    }
}
