import React from 'react';
import Board from './Board';
export default function index() {
  return (
    <div>
      <Board knightPosition={[0, 0]} />
    </div>
  );
}
