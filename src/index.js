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
}

export class TriangleGenerator {
    constructor(defaultProps) {
        this.props = defaultProps;
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
