import React, {Component, PropTypes} from "react"; // eslint-disable-line no-unused-vars
import Triangle, {TriangleGenerator} from "../lib";

export default class TriangleComponent extends Component {
    constructor(props) {
        super();
        this.props = props;
        const fill = Math.random() < 0.5 ? "black" : "white";
        const nextFill = fill === "black" ? "white": "black";
        this.state = {
            fill,
            nextFill,
        };
    }

    render() {
        return (
            <Triangle
                {...this.props}
                {...this.state}
                stroke={this.state.fill}
                onClick={() => this.handleClick()}
            />
        );
    }

    handleClick() {
        this.setState({
            fill: this.state.nextFill,
            nextFill: this.state.fill
        });
    }
}

TriangleComponent.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    wx: PropTypes.number,
    hy: PropTypes.number,
    direction: PropTypes.oneOf(["up", "down", "left", "right"]),
    size: PropTypes.number
};
