import React, { Component } from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Triangle, { TriangleGenerator } from '../src/index.jsx';

const story = storiesOf('-----examples-----', module);

story.add('README\'s example', () => {
  class Triangles extends Component {
    constructor(props) {
      super(props);
      this.generator = new TriangleGenerator({
        x: 50,
        y: 50,
        size: 50,
        direction: "left"
      });
    }

    render() {
      const triangles = Array.from(Array(10).keys()).map((i) => {
        return Array.from(Array(10).keys()).map((j) => {
          const triangleProps = this.generator.byCoord(i, j);
          return this.triangle(triangleProps);
        });
      });
      return (<g>{triangles}</g>);
    }

    triangle(props) {
      return (
        <Triangle
          x={props.x}
          y={props.y}
          size={props.size}
          direction={props.direction}
          key={`x${props.x}y${props.y}`}
          style={{strokeWidth: "1px", stroke: "white"}}
        />
      );
    }
  }

  return (
    <svg width="500" height="500">
      <Triangles />
    </svg>
  );
});

story.add('up-down direction grid system', () => {
  const generator = new TriangleGenerator({
    x: 100,
    y: 100,
    size: 100,
    direction: 'up'
  });

  const triangles = Array.from(Array(10).keys()).map((i) => {
    return Array.from(Array(10).keys()).map((j) => {
      const props = generator.byCoord(i, j);
      return (
        <g key={`${props.x},${props.y}`}>
          <Triangle {...props} stroke="white" />
          <text x={props.x - 10} y={props.y} fill="white">{`${i},${j}`}</text>
        </g>
      );
    });
  });

  return (
    <svg width="1000" height="1000">
      {triangles}
    </svg>
  );
});

story.add('left-right direction grid system', () => {
  const generator = new TriangleGenerator({
    x: 100,
    y: 100,
    size: 100,
    direction: 'left'
  });

  const triangles = Array.from(Array(10).keys()).map((i) => {
    return Array.from(Array(10).keys()).map((j) => {
      const props = generator.byCoord(i, j);
      return (
        <g key={`${props.x},${props.y}`}>
          <Triangle {...props} stroke="white" />
          <text x={props.x - 10} y={props.y} fill="white">{`${i},${j}`}</text>
        </g>
      );
    });
  });

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
        x: Math.random() * size,
        y: Math.random() * size,
        size: 50 + Math.random() * 100,
        speed: Math.random() * 10,
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
      this.state = { fill: Math.random() < 0.5 };
    }

    render() {
      return (
        <Triangle
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

  const generator = new TriangleGenerator({
    x: 50,
    y: 50,
    size: 50,
    direction: 'up',
  });
  const triangles = Array.from(Array(10).keys()).map((i) => {
    return Array.from(Array(10).keys()).map((j) => {
      const props = generator.byCoord(i, j);
      return (
        <DrawTriangle key={`${i},${j}`} {...props} size={50} />
      );
    });
  });

  return(
    <div>
      <p>move mouse on triangles</p>

      <svg width="500" height="500">
        {triangles}
      </svg>
    </div>
  );
});
