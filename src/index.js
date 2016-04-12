import React, {Component, PropTypes} from "react"; // eslint-disable-line no-unused-vars

export class TriangleSupport extends Component {};
TriangleSupport.propTypes = {
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    pointTop: PropTypes.bool,
    size: PropTypes.number
};
TriangleSupport.defaultProps = {
    offsetX: 0,
    offsetY: 0,
    pointTop: true,
    size: 100
};

export class PointTopTriangle extends TriangleSupport {
    render() {
        return (<polygon points="0,0 100,0 100,100 0,100"/>);
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
};

export class LineTopTriangle extends TriangleSupport {
    render() {
        return (<polygon points="0,0 100,0 100,100 0,100"/>);
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
};

export default class Triangle extends TriangleSupport {
    render() {
        return this.props.pointTop ?
            <PointTopTriangle {...this.props} /> :
            <LineTopTriangle {...this.props} />;
    }
}
