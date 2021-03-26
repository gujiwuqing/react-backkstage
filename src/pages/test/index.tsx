import React from 'react';
import { Button } from 'antd';
import styles from './index.less';
const Page = () => {
  return (
    <div className={styles.center}>
      <Button type="primary">按钮</Button>
      <span className={styles.primary}>
        这里的颜色，在less文件中使用了主题色的变量。 @brand-primary{' '}
      </span>
    </div>
  );
};

export default Page;
