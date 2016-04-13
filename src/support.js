import React, {Component, PropTypes} from "react"; // eslint-disable-line no-unused-vars
export default class TriangleSupport extends Component {}
TriangleSupport.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    direction: PropTypes.oneOf(["up", "down", "left", "right"]),
    size: PropTypes.number
};
TriangleSupport.defaultProps = {
    x: 0,
    y: 0,
    direction: "up",
    size: 100
};
