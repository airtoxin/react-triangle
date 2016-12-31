/* eslint-disable no-mixed-operators,consistent-return */
const THETAS = [0, Math.PI / 3 * 2, Math.PI / 3 * 4];

const range = n => Array.from(Array(n).keys());
const product = (p, q) => {
  const l = [];
  range(p).forEach((i) => {
    range(q).forEach((j) => {
      l.push([i, j]);
    });
  });
  return l;
};
const getDiff = (direction) => {
  if (direction === 'right') return 0;
  if (direction === 'down') return Math.PI / 2;
  if (direction === 'left') return Math.PI;
  if (direction === 'up') return Math.PI / 2 * 3;
};

export const corners = (direction, x, y, size) => {
  const r = size * Math.sqrt(3) / 3;
  const diff = getDiff(direction);
  return THETAS
    .map(theta => theta + diff)
    .map(theta => [x + r * Math.cos(theta), y + r * Math.sin(theta)]);
};

export const gridPoint = (oDirection, oX, oY, size, gridX, gridY) => {
  if (oDirection === 'up') {
    const direction = (gridX + gridY) % 2 === 0 ? 'up' : 'down';
    const diffY = (gridX + gridY) % 2 === 0 ?
      0 :
      size / 2 * Math.sqrt(3) / 3;
    const height = size / 2 * Math.sqrt(3);
    const x = oX + size / 2 * gridX;
    const y = oY - diffY + height * gridY;
    return {
      props: {
        direction,
        x,
        y,
        size,
      },
      gridX,
      gridY,
    };
  } else if (oDirection === 'down') {
    const direction = (gridX + gridY) % 2 === 0 ? 'down' : 'up';
    const diffY = (gridX + gridY) % 2 === 0 ?
      0 :
      size / 2 * Math.sqrt(3) / 3;
    const height = size / 2 * Math.sqrt(3);
    const x = oX + size / 2 * gridX;
    const y = oY + diffY + height * gridY;
    return {
      props: {
        direction,
        x,
        y,
        size,
      },
      gridX,
      gridY,
    };
  } else if (oDirection === 'left') {
    const direction = (gridX + gridY) % 2 === 0 ? 'left' : 'right';
    const width = size / 2 * Math.sqrt(3);
    const diffX = (gridX + gridY) % 2 === 0 ?
      0 :
      size / 2 * Math.sqrt(3) / 3;
    const x = oX - diffX + width * gridX;
    const y = oY + size / 2 * gridY;
    return {
      props: {
        direction,
        x,
        y,
        size,
      },
      gridX,
      gridY,
    };
  } else if (oDirection === 'right') {
    const direction = (gridX + gridY) % 2 === 0 ? 'right' : 'left';
    const width = size / 2 * Math.sqrt(3);
    const diffX = (gridX + gridY) % 2 === 0 ?
      0 :
      size / 2 * Math.sqrt(3) / 3;
    const x = oX + diffX + width * gridX;
    const y = oY + size / 2 * gridY;
    return {
      props: {
        direction,
        x,
        y,
        size,
      },
      gridX,
      gridY,
    };
  }
};

export const gridPoints = (oDirection, oX, oY, size, gridWidth, gridHeight) =>
  product(gridWidth, gridHeight).map(([gridX, gridY]) =>
    gridPoint(oDirection, oX, oY, size, gridX, gridY));
