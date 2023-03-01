import React, { useEffect } from 'react';
import Tile from './Tile';
import { mapper } from '../functions/mapper';
import { map } from '../db/hardcodedMap';

const Board = () => {

  useEffect(()=>{
    
  },[]);

  return (
    <div className='board'>
        <Tile/>
        {mapper(map)}
    </div>
  )
}

export default Board;