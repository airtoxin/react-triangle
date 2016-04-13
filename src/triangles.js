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
            [x, y],
            [x + s / 2, y - h],
            [x + s, y]
        ];
    }

    static nextLeft({x, y, size}) {
        const h = Math.sqrt(3) * size / 2;
        return {
            x: x - size / 2,
            y: y - h,
            direction: "down",
            size
        };
    }
    static nextRight({x, y, size}) {
        const h = Math.sqrt(3) * size / 2;
        return {
            x: x + size / 2,
            y: y - h,
            direction: "down",
            size
        };
    }
    static nextUp({x, y, size}) {
        const h = Math.sqrt(3) * size / 2;
        return {
            x: x,
            y: y - size * 2,
            direction: "down",
            size
        };
    }
    static nextDown({x, y, size}) {
        const h = Math.sqrt(3) * size / 2;
        return {
            x: x,
            y: y,
            direction: "down",
            size
        };
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
            [x + s, y],
            [x + s / 2, y + h]
        ];
    }

    static nextLeft({x, y, size}) {
        const h = Math.sqrt(3) * size / 2;
        return {
            x: x - size / 2,
            y: y + h,
            direction: "up",
            size
        };
    }
    static nextRight({x, y, size}) {
        const h = Math.sqrt(3) * size / 2;
        return {
            x: x + size / 2,
            y: y + h,
            direction: "up",
            size
        };
    }
    static nextUp({x, y, size}) {
        return {
            x,
            y,
            direction: "up",
            size
        };
    }
    static nextDown({x, y, size}) {
        return {
            x,
            y: y + size * 2,
            direction: "up",
            size
        };
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
            [x, y],
            [x, y - s],
            [x + w, y - s / 2]
        ];
    }

    static nextLeft({x, y, size}) {
        const w = Math.sqrt(3) * size / 2;
        return {
            x: x - w,
            y: y - size / 2,
            direction: "right",
            size
        };
    }
    static nextRight({x, y, size}) {
        const w = Math.sqrt(3) * size / 2;
        return {
            x: x + w,
            y: y - size / 2,
            direction: "right",
            size
        };
    }
    static nextUp({x, y, size}) {
        return {
            x,
            y: y + size,
            direction: "right",
            size
        };
    }
    static nextDown({x, y, size}) {
        return {
            x,
            y,
            direction: "right",
            size
        };
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
            [x, y],
            [x + w, y - s / 2],
            [x + w, y + s / 2]
        ];
    }

    static nextLeft({x, y, size}) {
        const w = Math.sqrt(3) * size / 2;
        return {
            x: x - w,
            y: y + size / 2,
            direction: "left",
            size
        };
    }
    static nextRight({x, y, size}) {
        const w = Math.sqrt(3) * s / 2;
        return {
            x: x + w,
            y: y + size / 2,
            direction: "left",
            size
        };
    }
    static nextUp({x, y, size}) {
        return {
            x,
            y,
            direction: "left",
            size
        };
    }
    static nextDown({x, y, size}) {
        return {
            x,
            y: y + size,
            direction: "left",
            size
        };
    }
}
