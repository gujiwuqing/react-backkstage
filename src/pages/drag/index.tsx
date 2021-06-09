import React, { FC, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

interface ItemType {
  id: number;
  name: string;
}

const BasicFunction = () => {
  const [state, setState] = useState<ItemType[]>([
    { id: 1, name: 'shrek' },
    { id: 2, name: 'fiona1' },
    { id: 3, name: 'fiona2' },
    { id: 4, name: 'fiona3' },
    { id: 5, name: 'fiona4' },
  ]);

  return (
    <ReactSortable list={state} setList={setState}>
      {state.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </ReactSortable>
  );
};

export default BasicFunction;
