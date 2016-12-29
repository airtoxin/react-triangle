import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Triangle from '../src/index.jsx';

storiesOf('Triangle', module)
  .addWithInfo('simple usage', 'white dot is center point', () => (
    <svg width="500" height="500" style={{ border: 'solid 1px' }}>
      <Triangle x={175} y={250} size={50} direction="up"/>
      <circle cx="175" cy="250" r="2" fill="white"/>
      <Triangle x={225} y={250} size={50} direction="down"/>
      <circle cx="225" cy="250" r="2" fill="white"/>
      <Triangle x={275} y={250} size={50} direction="left"/>
      <circle cx="275" cy="250" r="2" fill="white"/>
      <Triangle x={325} y={250} size={50} direction="right"/>
      <circle cx="325" cy="250" r="2" fill="white"/>
    </svg>
  ), { inline: true })
  .addWithInfo('place in corner', () => (
    <svg width="500" height="500" style={{ border: 'solid 1px' }}>
      <Triangle size={50}/>
      <Triangle y={500} size={50} direction="down"/>
      <Triangle x={500} size={50} direction="left"/>
      <Triangle x={500} y={500} size={50} direction="right"/>
    </svg>
  ), { inline: true })
  .addWithInfo('big size', () => (
    <svg width="500" height="500" style={{ border: 'solid 1px' }}>
      <Triangle x={250} y={250} size={500}/>
    </svg>
  ), { inline: true })
  .addWithInfo('pass through props', () => (
    <svg width="500" height="500" style={{ border: 'solid 1px' }}>
      <Triangle
        x={250}
        y={250}
        size={100}
        direction="up"
        fill="none"
        stroke="black"
        strokeWidth="10"
        transform="rotate(15,250,250)"
        onClick={action('onClick')}
        onMouseEnter={action('onMouseEnter')}
      />
    </svg>
  ), { inline: true });
