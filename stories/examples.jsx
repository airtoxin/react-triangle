import React, { Component } from 'react';
import seedrandom from 'seedrandom';
import { storiesOf, action } from '@kadira/storybook';
import Triangle, { TriangleGenerator, gridPoints } from '../src/index.jsx';

const rng = seedrandom(process.env.NODE_ENV);
const story = storiesOf('-----examples-----', module);

story.add('README\'s example', () => {
  const triangles = gridPoints('up', 0, 0, 50, 10, 5).map(({ props }) => (
    <Triangle key={`${props.x}-${props.y}`} {...props} stroke="white"/>
  ));

  return (
    <svg width="500" height="500">
      {triangles}
    </svg>
  );
});

story.add('up-down direction grid system', () => {
  const triangles = gridPoints('up', 100, 100, 100, 10, 10).map(({ props, gridX, gridY }) => (
    <g key={`${props.x},${props.y}`}>
      <Triangle {...props} stroke="white" />
      <text x={props.x - 10} y={props.y} fill="white">{`${gridX},${gridY}`}</text>
    </g>
  ));

  return (
    <svg width="1000" height="1000">
      {triangles}
    </svg>
  );
});

story.add('left-right direction grid system', () => {
  const triangles = gridPoints('left', 100, 100, 100, 10, 10).map(({ props, gridX, gridY }) => (
    <g key={`${props.x},${props.y}`}>
      <Triangle {...props} stroke="white" />
      <text x={props.x - 10} y={props.y} fill="white">{`${gridX},${gridY}`}</text>
    </g>
  ));

  return (
    <svg width="1000" height="1000">
      {triangles}
    </svg>
  );
});

story.add('animation with transform', () => {
  class AnimatedTriangle extends Component {
    constructor({ size }) {
      super();
      this.state = {
        deg: 0,
        x: rng() * size,
        y: rng() * size,
        size: 50 + rng() * 100,
        speed: rng() * 10,
      };
      this.interval = null;
    }

    componentDidMount() {
      this.interval = setInterval(() => this.setState({
        ...this.state,
        deg: this.state.deg + this.state.speed,
      }), 15);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
      this.interval = null;
    }

    render() {
      return (
        <Triangle
          direction="up"
          x={this.state.x}
          y={this.state.y}
          size={this.state.size}
          fill="none"
          stroke="black"
          transform={`rotate(${this.state.deg},${this.state.x},${this.state.y})`}
        />
      );
    }
  }

  return (
    <svg width="500" height="500">
      {Array.from(Array(10).keys()).map(i => (
        <AnimatedTriangle key={i} size={500} />
      ))}
    </svg>
  );
});

story.add('draw', () => {
  class DrawTriangle extends Component {
    constructor() {
      super();
      this.state = { fill: rng() < 0.5 };
    }

    render() {
      return (
        <Triangle
          direction="up"
          x={this.props.x}
          y={this.props.y}
          direction={this.props.direction}
          size={this.props.size}
          fill={this.state.fill ? 'black' : 'white'}
          onMouseEnter={() => this.setState({ fill: !this.state.fill })}
          onClick={() => this.setState({ fill: !this.state.fill })}
        />
      );
    }
  }

  const triangles = gridPoints('up', 50, 50, 50, 10, 10).map(({ props }) => (
    <DrawTriangle key={`${props.x},${props.y}`} {...props} />
  ));

  return(
    <div>
      <p>move mouse on triangles</p>
      <svg width="500" height="500">
        {triangles}
      </svg>
    </div>
  );
});
