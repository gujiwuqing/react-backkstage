import React, { useState } from 'react';
import { Form, Table, Button, Input } from 'antd';
export default function index() {
  const list: any[] = [];
  const [data, setData] = useState<any[]>(list);

  const changedColumnStatus = (record: any) => {
    console.log(record);
    record.status = !record.status;
    setData([...data]);
  };
  const changedColumnValue = (value: any, record: any) => {
    console.log(value);
    record.realName = value;
    setData([...data]);
  };
  const handleSave = () => {
    data.map((item) => {
      item.status = false;
    });
    setData([...data]);
  };

  const columns = [
    {
      title: '姓名',
      dataIndex: 'realName',
      key: 'realName',
      render: (_: any, record: any) => {
        if (record.status) {
          return (
            <Form.Item
              rules={[{ required: true, message: '请输入年龄' }]}
              name="realName"
              initialValue={_}
            >
              <Input
                onChange={(e) => {
                  changedColumnValue(e.target.value, record);
                }}
              />
            </Form.Item>
          );
        } else {
          return <span>{_}</span>;
        }
      },
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '操作',
      width: 200,
      render: (_: any, record: any) => {
        if (record.status) {
          return (
            <>
              <Button htmlType="submit">保存</Button>
              <Button>取消</Button>
            </>
          );
        } else {
          return (
            <>
              <Button
                onClick={() => {
                  changedColumnStatus(record);
                }}
              >
                编辑
              </Button>
            </>
          );
        }
      },
    },
  ];
  const handleAdd = () => {
    for (let i = 0; i < 10; i++) {
      data.push({ realName: 'test', age: 17, address: '', status: false });
    }
    setData([...data]);
  };
  return (
    <div>
      <Form onFinish={handleSave}>
        <Table dataSource={data} columns={columns} />
        <Button onClick={handleAdd}>添加</Button>
      </Form>
    </div>
  );
}
