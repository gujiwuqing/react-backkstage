import React, { useState } from 'react';
import { Table } from 'antd';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import './index.less';
const App = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      name: '张三',
      age: 18,
      address: '张三张三张三张三张三张三张三',
      index: 0,
    },
    {
      key: '2',
      name: '李四',
      age: 19,
      address: '李四李四李四李四李四李四李四',
      index: 1,
    },
    {
      key: '3',
      name: '王五',
      age: 20,
      address: '王五王五王五王五王五王五王五',
      index: 2,
    },
  ]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      className: 'drag-visible',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];

  const SortableItem = sortableElement((props: any) => (
    <tr {...props} style={{ cursor: 'move' }} />
  ));
  const SortableContainer = sortableContainer(
    (
      props: JSX.IntrinsicAttributes &
        React.ClassAttributes<HTMLTableSectionElement> &
        React.HTMLAttributes<HTMLTableSectionElement>,
    ) => <tbody {...props} />,
  );

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMove(
        [].concat(dataSource),
        oldIndex,
        newIndex,
      ).filter((el) => !!el);
      setDataSource(newData);
    }
  };

  const DraggableContainer = (props: JSX.IntrinsicAttributes) => (
    <SortableContainer
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...props}
    />
  );

  const DraggableBodyRow = ({ className, style, ...restProps }) => {
    const index = dataSource.findIndex(
      (x) => x.index === restProps['data-row-key'],
    );
    return <SortableItem index={index} {...restProps} />;
  };

  return (
    <>
      <Table
        pagination={false}
        dataSource={dataSource}
        columns={columns}
        rowKey="index"
        onSortEnd={onSortEnd}
        components={{
          body: {
            wrapper: DraggableContainer,
            row: DraggableBodyRow,
          },
        }}
      />
    </>
  );
};

export default App;
