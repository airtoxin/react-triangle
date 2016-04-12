import React, {Component, PropTypes} from "react"; // eslint-disable-line no-unused-vars
export default class TriangleSupport extends Component {}
TriangleSupport.propTypes = {
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    direction: PropTypes.oneOf(["up", "down", "left", "right"]),
    size: PropTypes.number
};
TriangleSupport.defaultProps = {
    offsetX: 0,
    offsetY: 0,
    direction: "up",
    size: 100
};
