import React, { useState } from 'react';
import { Form, Table, Button, Input, Select, message } from 'antd';
import shortid from 'shortid';
import './index.less';
import { limitNumber } from '@/utils/global';
export interface BaseEditTableProps {
  handleAdd: () => void;
  count: number;
  data: any[];
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  columns: any;
}
const { Option } = Select;
const BaseEditTable = () => {
  const [form] = Form.useForm();
  const list: any[] = [];
  const [data, setData] = useState<any[]>(list);
  const [count, setCount] = useState<number>(1);
  const [obj, setObj] = useState<any>({});
  const changedColumnStatus = (record: any) => {
    const statusCount = data.filter((t) => t.status == true);
    if (statusCount.length > 0) {
      message.warning('只能同时修改一行');
    } else {
      console.log('update', record);
      setObj({ ...record });
      record.status = !record.status;
      console.log(data);
      setData([...data]);
    }
  };
  const changedColumnValue = (type: any, value: any, record: any) => {
    data.map((item) => {
      if (item.id === record.id) {
        item[type] = value;
      }
      return item;
    });
    // setData([...data]);
  };
  const handleSave = (record: any) => {
    console.log('record=>', record);
    console.log('data=>', data);
    // console.log('handleSave', record);
    form.validateFields().then((values) => {
      record.status = !record.status;
      setData([...data]);
      // console.log(data);
    });
  };
  /**
   * 取消
   * @param record
   */
  const handleCancle = (record: any) => {
    form.resetFields();
    console.log('obj', obj);
    // record = JSON.parse(JSON.stringify(obj));
    for (const key in obj) {
      record[key] = obj[key];
    }
    setData([...data]);
  };
  const changeEvent = (e: any) => {
    let value = e.target.value.replace(/[^\d]/, '');
    console.log('value', value);
    setCount(value);
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
              rules={[{ required: true, message: '请输入姓名' }]}
              name={`realName_${record.id}`}
              initialValue={record.realName}
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
                  const { value } = e.target;
                  const reg = /^-?\d*(\.\d*)?$/;
                  if (
                    (!isNaN(Number(value)) && reg.test(value)) ||
                    value === '' ||
                    value === '-'
                  ) {
                    console.log(value);
                  }
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
                  handleCancle(record);
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
    for (let i = 1; i <= count; i++) {
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
            onChange={(e: any) => changeEvent(e)}
            className="footer-input"
            placeholder="请输入你想添加的数量"
            value={count}
          />
          <span>条数据</span>
        </div>
      </Form>
    </div>
  );
};

export default BaseEditTable;
