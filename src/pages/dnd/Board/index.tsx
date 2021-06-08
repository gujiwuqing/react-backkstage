import React from 'react';
import Knight from '../Knight';
import Square from '../Square';
export default function Board() {
  return (
    <div>
      <Square black>
        <Knight />
      </Square>
    </div>
  );
}
