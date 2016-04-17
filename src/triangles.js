import React from "react"; // eslint-disable-line no-unused-vars
import TriangleSupport from "./support";

const d1 = 1 / Math.sqrt(3);
const d2 = 2 / Math.sqrt(3);

export class UpTriangle extends TriangleSupport {
    _calcVertexCoord() {
        const x = this.props.x;
        const y = this.props.y;
        const s = this.props.size;
        return [
            [x, y - d2 * s / 2],
            [x + s / 2, y + d1 * s / 2],
            [x - s / 2, y + d1 * s / 2]
        ];
    }

    static nextLeft({x, y, size}) {
        return {
            x: x - size / 2,
            y: y - d1 * size / 2,
            direction: "down",
            size
        };
    }
    static nextRight({x, y, size}) {
        return {
            x: x + size / 2,
            y: y - d1 * size / 2,
            direction: "down",
            size
        };
    }
    static nextUp({x, y, size}) {
        return {
            x,
            y: y - d2 * size, // d2 * 2 * size / 2
            direction: "down",
            size
        };
    }
    static nextDown({x, y, size}) {
        return {
            x,
            y: y + d1 * size, // d1 * 2 * size / 2
            direction: "down",
            size
        };
    }
}

export class DownTriangle extends TriangleSupport {
    _calcVertexCoord() {
        const x = this.props.x;
        const y = this.props.y;
        const s = this.props.size;
        return [
            [x, y + d2 * s / 2],
            [x - s / 2, y - d1 * s / 2],
            [x + s / 2, y - d1 * s / 2]
        ];
    }

    static nextLeft({x, y, size}) {
        return {
            x: x - size / 2,
            y: y + d1 * size / 2,
            direction: "up",
            size
        };
    }
    static nextRight({x, y, size}) {
        return {
            x: x + size / 2,
            y: y + d1 * size / 2,
            direction: "up",
            size
        };
    }
    static nextUp({x, y, size}) {
        return {
            x,
            y: y - d1 * size, // d1 * 2 * size / 2
            direction: "up",
            size
        };
    }
    static nextDown({x, y, size}) {
        return {
            x,
            y: y + d2 * size, // d2 * 2 * size / 2
            direction: "up",
            size
        };
    }
}

export class LeftTriangle extends TriangleSupport {
    _calcVertexCoord() {
        const x = this.props.x;
        const y = this.props.y;
        const s = this.props.size;
        return [
            [x - d2 * s / 2, y],
            [x + d1 * s / 2, y - s / 2],
            [x + d1 * s / 2, y + s / 2]
        ];
    }

    static nextLeft({x, y, size}) {
        return {
            x: x - d2 * size, // d2 * 2 * size / 2
            y,
            direction: "right",
            size
        };
    }
    static nextRight({x, y, size}) {
        return {
            x: x + d1 * size, // d1 * 2 * size / 2
            y,
            direction: "right",
            size
        };
    }
    static nextUp({x, y, size}) {
        return {
            x: x - d1 * size / 2,
            y: y - size / 2,
            direction: "right",
            size
        };
    }
    static nextDown({x, y, size}) {
        return {
            x: x - d1 * size / 2,
            y: y + size / 2,
            direction: "right",
            size
        };
    }
}

export class RightTriangle extends TriangleSupport {
    _calcVertexCoord() {
        const x = this.props.x;
        const y = this.props.y;
        const s = this.props.size;
        return [
            [x + d2 * s / 2, y],
            [x - d1 * s / 2, y + s / 2],
            [x - d1 * s / 2, y - s / 2]
        ];
    }

    static nextLeft({x, y, size}) {
        return {
            x: x - d1 * size, // d1 * 2 * size / 2
            y,
            direction: "left",
            size
        };
    }
    static nextRight({x, y, size}) {
        return {
            x: x + d2 * size, // d2 * 2 * size / 2
            y,
            direction: "left",
            size
        };
    }
    static nextUp({x, y, size}) {
        return {
            x: x + d1 * size / 2,
            y: y - size / 2,
            direction: "left",
            size
        };
    }
    static nextDown({x, y, size}) {
        return {
            x: x + d1 * size / 2,
            y: y + size / 2,
            direction: "left",
            size
        };
    }
}
