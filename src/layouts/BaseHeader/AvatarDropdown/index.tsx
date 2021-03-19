import { DownOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu, message, Popconfirm, Input, Form } from 'antd';
import React from 'react';
import { history, useModel } from 'umi';
import { useTranslation } from 'react-i18next';
import BaseModalForm from '@/components/BaseModalForm';
const AvatarDropdown = () => {
  const { t, i18n } = useTranslation();
  const { user } = useModel('user', (model) => ({
    user: model.user,
  }));
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          {t('user-info')}
        </a>
      </Menu.Item>
      <Menu.Item>
        <BaseModalForm
          title="修改密码"
          triggerRender={() => (
            <a target="_blank" rel="noopener noreferrer">
              {t('change-password')}
            </a>
          )}
        >
          <Form.Item label="旧密码" name="password">
            <Input />
          </Form.Item>
          <Form.Item
            label="新密码"
            rules={[{ required: true }]}
            name="newPassword"
          >
            <Input />
          </Form.Item>
        </BaseModalForm>
      </Menu.Item>
      <Menu.Item>
        <Popconfirm
          title="是否确定退出登录?"
          onConfirm={confirm}
          okText="确定"
          cancelText="取消"
        >
          <a href="#"> {t('sign-out')}</a>
        </Popconfirm>
      </Menu.Item>
    </Menu>
  );
  function confirm() {
    history.push('/login');
    message.success('退出成功');
  }

  let userInfo = { name: '' };
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      {/* <a
        className="ant-dropdown-link"
        onClick={(e) => e.preventDefault()}
        style={{ marginLeft: '10px' }}
      >
        Hover me <DownOutlined />
      </a> */}
      <span>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <span>
          {user?.username ? user?.username : '孤寂无情'}
          <DownOutlined />
        </span>
      </span>
    </Dropdown>
  );
};

export default AvatarDropdown;
