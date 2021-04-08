import React, { useState } from 'react';
import { Form, Input, Button, message, Switch, TreeSelect } from 'antd';
import BaseEditTable from '@/components/BaseEditTable';
import shortid from 'shortid';
import './index.less';
const EditTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<any[]>([]);
  const [count, setCount] = useState<number>(1);
  const [obj, setObj] = useState<any>({});
  const treeData = [
    {
      title: '江西省',
      value: '0-0',
      children: [
        {
          title: '南昌市',
          value: '0-0-1',
        },
        {
          title: '九江市',
          value: '0-0-2',
        },
      ],
    },
    {
      title: '湖北省',
      value: '0-1',
      children: [
        {
          title: '襄阳市',
          value: '0-1-1',
        },
        {
          title: '武汉市',
          value: '0-1-2',
        },
      ],
    },
  ];
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
  };
  const handleSave = (record: any) => {
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
  const handleCancel = (record: any) => {
    form.resetFields();
    console.log('obj', obj);
    // record = JSON.parse(JSON.stringify(obj));
    for (const key in obj) {
      record[key] = obj[key];
    }
    setData([...data]);
  };

  /*
   * 获取地址label值
   * */

  const getValue = (data: any, value: string) => {
    console.log(value);
    let title: string = '';
    data.map((item: any) => {
      if (item.value == value) {
        console.log(item.title);
        title = item.title;
      } else if (item.children) {
        getValue(item.children, value);
      }
    });
    return title;
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
      title: '密码',
      dataIndex: 'password',
      key: 'password',
      render: (_: any, record: any) => {
        if (record.status) {
          return (
            <Form.Item
              rules={[{ required: true, message: '请输入密码' }]}
              name={`password${record.id}`}
              initialValue={_}
            >
              <Input
                onChange={(e) => {
                  changedColumnValue('password', e.target.value, record);
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
      title: '重复密码',
      dataIndex: 'password2',
      key: 'password2',
      render: (_: any, record: any) => {
        if (record.status) {
          return (
            <Form.Item
              rules={[
                { required: true, message: '请输入重复密码' },
                {
                  validator: (_rule: any, value: string, callback: any) => {
                    const oldVal = record.password;
                    if (value && oldVal !== value) {
                      callback(new Error('两次密码输入不一致'));
                    } else {
                      callback();
                    }
                  },
                },
              ]}
              name={`password2${record.id}`}
              initialValue={_}
            >
              <Input
                onChange={(e) => {
                  changedColumnValue('password2', e.target.value, record);
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
      width: 300,
      render: (_: any, record: any) => {
        if (record.status) {
          return (
            <Form.Item
              rules={[{ required: true, message: '请输入年龄' }]}
              name={`address${record.id}`}
              initialValue={record.address.value}
            >
              <TreeSelect
                style={{ width: '100%' }}
                labelInValue={true}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={treeData}
                placeholder="请选择地址"
                treeDefaultExpandAll
                onChange={(value) => {
                  console.log(value);
                  record.address = value;
                }}
              />
            </Form.Item>
          );
        } else {
          // console.log('getValue(treeData,record.address)',getValue(treeData, record.address));
          // return  getValue(treeData,record.address)
          return <span>{_.label}</span>;
        }
      },
    },
    {
      title: '状态',
      dataIndex: 'userStatus',
      key: 'userStatus',
      render: (_: any, record: any) => {
        return (
          <Form.Item
            rules={[{ required: true, message: '请输入年龄' }]}
            name={`userStatus${record.id}`}
            initialValue={record.address}
          >
            <Switch
              defaultChecked={_}
              onChange={(value) => {
                record.userStatus = value;
              }}
            />
          </Form.Item>
        );
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
                  handleCancel(record);
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
        password: 123456,
        password2: 123456,
        address: { value: '0-1-1', label: '襄阳市' },
        status: false,
        userStatus: false,
        id: shortid.generate(),
      });
    }
    setData([...data]);
  };
  return (
    <Form form={form} className="user-form">
      <Button
        onClick={() => {
          console.log('data', data);
        }}
        type="primary"
        className="user-form_save"
      >
        保存
      </Button>
      <BaseEditTable
        columns={columns}
        data={data}
        count={count}
        setCount={setCount}
        handleAdd={handleAdd}
        setData={setData}
      />
    </Form>
  );
};
export default EditTable;
