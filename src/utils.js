const THETAS = [0, Math.PI / 3 * 2, Math.PI / 3 * 4];

export const corners = (direction, x, y, size) => {
  const r = size * Math.sqrt(3) / 3;
  const diff = getDiff(direction);
  return THETAS
    .map(theta => theta + diff)
    .map(theta => [x + r * Math.cos(theta), y + r * Math.sin(theta)]);
};

const getDiff = (direction) => {
  if (direction === 'right') return 0;
  if (direction === 'down') return Math.PI / 2;
  if (direction === 'left') return Math.PI;
  if (direction === 'up') return Math.PI / 2 * 3;
};
