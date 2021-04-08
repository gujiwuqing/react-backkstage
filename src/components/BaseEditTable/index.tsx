import React, { useState } from 'react';
import { Form, Table, Button, Input, message } from 'antd';
import './index.less';

export interface BaseEditTableProps {
  handleAdd: () => void;
  count: number;
  data: any[];
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  columns: any;
}
const BaseEditTable = ({
  data,
  handleAdd,
  count,
  setCount,
  ...reset
}: BaseEditTableProps) => {
  const [form] = Form.useForm();
  const changeEvent = (e: any) => {
    let value = e.target.value.replace(/[^\d]/, '');
    console.log('value', value);
    setCount(value);
  };
  return (
    <div>
      <Table dataSource={data} rowKey={(record) => record.id} {...reset} />
      <div className="table-footer">
        <Button onClick={handleAdd} type="primary">
          添加
        </Button>
        <Input
          onChange={(e: any) => changeEvent(e)}
          className="footer-input"
          placeholder="请输入你想添加的数量"
          value={count}
        />
        <span>条数据</span>
      </div>
    </div>
  );
};

export default BaseEditTable;
