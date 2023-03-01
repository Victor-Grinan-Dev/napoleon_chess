import React from 'react';


const Tile = ({id, posLeft, posTop, tileObject, image=null, showId=false, formation=null, status=null}) => {

  return (
    <div  id={id}
      className='tile'
      name="tile"
      //onClick={detectClick} 
      style={{
        backgroundImage:`url(${image})`, //not working
        left:`${posLeft}px`,
        top:`${posTop}px`,
      }}>
    </div>
  )
}

export default Tile;