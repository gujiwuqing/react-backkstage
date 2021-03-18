import React from 'react';
import { Tree } from 'antd';

interface BaseTreeProps {
  treeData?: any;
  expandedKeys?: any;
  isCheckBox?: boolean;
  onSelect: () => void;
}

const defultTreeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: <span style={{ color: '#1890ff' }}>sss</span>,
            key: '0-0-1-0',
          },
        ],
      },
    ],
  },
];
export default function BaseTree({
  treeData = defultTreeData,
  expandedKeys = ['0-0-0', '0-0-1'],
  isCheckBox = true,
  onSelect,
}: BaseTreeProps) {
  const onCheck = (checkedKeys: React.Key[], info: any) => {
    console.log('onCheck', checkedKeys, info);
  };
  return (
    <div>
      <Tree
        checkable={isCheckBox}
        defaultExpandedKeys={expandedKeys}
        defaultSelectedKeys={['0-0-0', '0-0-1']}
        defaultCheckedKeys={['0-0-0', '0-0-1']}
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={treeData}
      />
    </div>
  );
}
