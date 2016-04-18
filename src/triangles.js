import React from "react"; // eslint-disable-line no-unused-vars
import TriangleSupport from "./support";

export class TriangleGenerator {
    constructor(props) {
        this.props = props;
    }

    byCoord(deltaX, deltaY) {
        const isSameDirection = (deltaX + deltaY) % 2 === 0;
        return {
            ...this.props,
            // overwrites
            x: this._getX(deltaX, deltaY),
            y: this._getY(deltaX, deltaY),
            direction: isSameDirection ? this.props.direction : this._getAdjacentDirection(),
            size: this.props.size
        };
    }

    _getX(deltaX, deltaY) {
        if (this.props.direction === "up" || this.props.direction === "down") {
            return this.props.x + (this.props.size / 2 * deltaX);
        }
        if (this.props.direction === "left" || this.props.direction === "right") {
            return this.props.x + (Math.sqrt(3) * this.props.size / 2 * deltaX);
        }
    }

    _getY(deltaX, deltaY) {
        if (this.props.direction === "up" || this.props.direction === "down") {
            return this.props.y + (Math.sqrt(3) * this.props.size / 2 * deltaY);
        }
        if (this.props.direction === "left" || this.props.direction === "right") {
            return this.props.y + (this.props.size / 2 * deltaY);
        }
    }

    _getAdjacentDirection() {
        switch (this.props.direction) {
            case "up": return "down";
            case "down": return "up";
            case "left": return "right";
            case "right": return "left";
        }
    }
}

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
            [x - w / 2, y + s / 2],
            [x + w / 2, y],
            [x - w / 2, y - s / 2]
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
            [x + w / 2, y + s / 2],
            [x - w / 2, y],
            [x + w / 2, y - s / 2]
        ];
    }
}
