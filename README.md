# react-triangle [![Build Status](https://travis-ci.org/airtoxin/react-triangle.svg?branch=master)](https://travis-ci.org/airtoxin/react-triangle)
draw svg triangle grid with react

![img/screen.png](img/screen.png)

## Install

`$ npm install react-triangle`

## Example

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

More examples, see [Storybook](https://airtoxin.github.io/react-triangle).

## Documents

### `<Triangle direction={} x={} y={} size={}/>` (default exported)

Main React component of triangle.

| name      | PropTypes                                                   | description          |
|-----------|-------------------------------------------------------------|----------------------|
| direction | PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired | triangle direction   |
| x         | PropTypes.number.isRequired                                 | center coordinate x  |
| y         | PropTypes.number.isRequired                                 | center coordinate y  |
| size      | PropTypes.number.isRequired                                 | triangle edge length |

```js
import Triangle from 'react-triangle';

<Triangle direction="up" x={0} y={0} size={50} />
```

### `gridPoint(oDirection, oX, oY, size, gridX, gridY)`

__return: `{ props: { direction, x, y, size }, gridX, gridY }`__

Helper function to calculate triangle location in grid.
`props` field in returning object of this function can use for props of `Triangle` component.

(prefix `o` means original.)

| name       | value type                          | description                              |
|------------|-------------------------------------|------------------------------------------|
| oDirection | 'up' or 'down' or 'left' or 'right' | original triangle direction              |
| oX         | number                              | original triangle's center coordinate x  |
| oY         | number                              | original triangle's center coordinate y  |
| size       | number                              | triangle edge length                     |
| gridX      | integer                             | coordinate x in hexagonal grid system    |
| gridY      | integer                             | coordinate y in hexagonal grid system    |

```js
import Triangle, { gridPoint } from 'react-triangle';

const { props } = gridPoint('up', 0, 0, 50, 3, 4);
<Triangle {...props}/>
```

### `gridPoints(oDirection, oX, oY, size, gridWidth, gridHeight)`

__return: `[ { props: { direction, x, y, size }, gridX, gridY }, ... ]`__

Helper function to bulk calculate triangles location of grid.

(prefix `o` means original.)

| name       | value type                          | description                              |
|------------|-------------------------------------|------------------------------------------|
| oDirection | 'up' or 'down' or 'left' or 'right' | original triangle direction              |
| oX         | number                              | original triangle's center coordinate x  |
| oY         | number                              | original triangle's center coordinate y  |
| size       | number                              | triangle edge length                     |
| gridWidth  | integer                             | grid size of x                           |
| gridHeight | integer                             | grid size of y                           |

```js
import Triangle, { gridPoints } from 'react-triangle';

const triangles = gridPoints('up', 0, 0, 50, 5, 10).map(({ props, gridX, gridY }) => (
  <Triangle key={`${gridX}-${gridY}`} {...props}/>
));
```
