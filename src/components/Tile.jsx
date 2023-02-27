import React from 'react';

const Tile = ({top, left}) => {
  return (
    <div className='tile' style={{top, left}}></div>
  )
}

export default Tile;