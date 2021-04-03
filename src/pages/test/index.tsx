import React from 'react';
import BaseMap from '@/components/BaseMap';
import BaseModelForm from '@/components/BaseModalForm';
import { Button } from 'antd';

const Test = () => {
  return (
    <>
      <BaseModelForm
        triggerRender={() => <Button type="primary">打开地图</Button>}
        width={1100}
        title="选择地点"
      >
        <BaseMap />
      </BaseModelForm>
    </>
  );
};
export default Test;
