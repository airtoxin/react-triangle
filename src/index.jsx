import React, { PropTypes } from 'react';
import { corners } from './utils';

const Triangle = props => {
  const { direction, x, y, size } = props;
  const points = corners(direction, x, y, size);
  return <polygon {...props} points={points.map(p => p.join(',')).join(' ')} />;
};

Triangle.displayName = 'Triangle';

Triangle.propTypes = {
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export default Triangle;
export { gridPoint, gridPoints } from './utils';
