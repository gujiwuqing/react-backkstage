import React, { useState } from 'react';
import { Form, Table, Button, Input, Select } from 'antd';
import shortid from 'shortid';
import './index.less';

const { Option } = Select;
const BaseEditTable = () => {
  const [form] = Form.useForm();
  const list: any[] = [];
  const [data, setData] = useState<any[]>(list);
  const [count, setCount] = useState<number>(1);
  const changedColumnStatus = (record: any) => {
    console.log(record);
    record.status = !record.status;
    setData([...data]);
  };
  const changedColumnValue = (type: any, value: any, record: any) => {
    console.log('type', record.type);
    record[type] = value;
    console.log('changedColumnValue', record);
    setData([...data]);
  };
  const handleSave = (record: any) => {
    console.log('handleSave', record);
    data.map((item) => {
      item.status = false;
    });
    setData([...data]);
    console.log(data);
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
              name={`realName_${record.id}`}
              initialValue={_}
            >
              <Input
                onChange={(e) => {
                  changedColumnValue('realName', e.target.value, record);
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
      render: (_: any, record: any) => {
        if (record.status) {
          return (
            <Form.Item
              rules={[{ required: true, message: '请输入年龄' }]}
              name={`age${record.id}`}
              initialValue={_}
            >
              <Input
                onChange={(e) => {
                  changedColumnValue('age', e.target.value, record);
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
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      render: (_: any, record: any) => {
        if (record.status) {
          return (
            <Form.Item
              rules={[{ required: true, message: '请输入年龄' }]}
              name={`address${record.id}`}
              initialValue={record.address}
            >
              <Select
                style={{ width: 120 }}
                onChange={(value) => {
                  record.address = value;
                }}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </Select>
            </Form.Item>
          );
        } else {
          return <span>{_}</span>;
        }
      },
    },
    {
      title: '操作',
      width: 200,
      render: (_: any, record: any) => {
        if (record.status) {
          return (
            <>
              <Button
                onClick={() => handleSave(record)}
                style={{ marginRight: '10px' }}
              >
                保存
              </Button>
              <Button
                onClick={() => {
                  // record = { ...obj };
                  record.status = false;
                  form.resetFields();
                  setData([...data]);
                }}
              >
                取消
              </Button>
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
    for (let i = 0; i < count; i++) {
      data.push({
        realName: 'test',
        age: 17,
        address: 'jack',
        status: false,
        id: shortid.generate(),
      });
    }
    setData([...data]);
  };
  return (
    <div>
      <Form form={form}>
        <Table
          dataSource={data}
          columns={columns}
          rowKey={(record) => record.id}
        />
        <div className="table-footer">
          <Button onClick={handleAdd} type="primary">
            添加
          </Button>
          <Input
            onChange={(e: any) => setCount(e.target.value)}
            className="footer-input"
            placeholder="请输入你想添加的数量"
          />
          <span>条数据</span>
        </div>
      </Form>
    </div>
  );
};

export default BaseEditTable;
