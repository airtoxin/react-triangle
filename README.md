# react-triangle [![Build Status](https://travis-ci.org/airtoxin/react-triangle.svg?branch=master)](https://travis-ci.org/airtoxin/react-triangle)
draw svg triangle grid with react

![img/screen.png](img/screen.png)

## Install

`$ npm install react-triangle`

## Usage

```javascript
import React from 'react';
import ReactDom from 'react-dom';
import Triangle, { gridPoints } from 'react-triangle';

const Triangles = () => {
  const triangles = gridPoints('up', 0, 0, 50, 10, 5).map(props => (
    <Triangle key={`${props.x}-${props.y}`} {...props} stroke="white"/>
  ));

  return (
    <svg width="500" height="500">
      {triangles}
    </svg>
  );
};

ReactDom.render(<Triangles />, document.getElementById('example'));
```

![img/usagetriangles.png](img/usagetriangles.png)

## Api

### react component class `Triangle` (default exported)

triangle react component. `<Triangle x={10} y={50} size={30} direction="up"/>`

#### component props `x`

PropTypes.number

Triangle position of x (px).

#### component props `y`

PropTypes.number

Triangle position of y (px).

#### component props `size`

PropTypes.number

Triangle side length (px).

#### component props `direction`

PropTypes.oneOf(["up", "down", "left", "right"])

Triangle direction.

![img/directions.png](img/directions.png)

### class `TriangleGenerator` (named exported)

Helper class of Triangle class.

#### constructor arguments

Canonical triangle props object. `new TriangleGenerator({x:0, y:0, size:10, direction:"right"})`

Those of `x, y, size, direction` props used as variables. Other props values are passed through.

#### instance method `generator.byCoord(x, y)`

Generate props of Triangle class by coordinates x and y. `generator.byCoord(10, 20)`
