import React, { ReactElement } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
interface DargProps {
  list: any[];
  dragItem?: (value: any) => ReactElement;
  onSortEnd?: ({ oldIndex, newIndex }: any) => void;
}

const SortableComponent = ({
  list,
  dragItem,
  onSortEnd,
  ...reset
}: DargProps) => {
  const DefaultSortableItem = SortableElement(({ value }: any) => {
    return dragItem ? (
      dragItem(value)
    ) : (
      <li tabIndex={0} style={{ cursor: 'move' }}>
        {value}
      </li>
    );
  });

  const SortableList = SortableContainer(({ items }: any) => {
    return (
      <ul>
        {items.map((value: any, index: number) => (
          <DefaultSortableItem key={value} index={index} value={value} />
        ))}
      </ul>
    );
  });

  return <SortableList items={list} onSortEnd={onSortEnd} {...reset} />;
};
export default SortableComponent;
