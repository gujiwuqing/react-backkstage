import { Upload, message, Button } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';

function getBase64(
  img: Blob,
  callback: { (imageUrl: any): any; (arg0: string | ArrayBuffer | null): any },
) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file: { type: string; size: number }) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}
export const ImageUpload = () => {
  const [fileList, setFileList] = useState<any[]>([]);
  const handleChange = ({ file }: any) => {};
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <Upload
      listType="picture-card"
      showUploadList={false}
      action="https://www.fastmock.site/mock/85c752f2a572df1e979659e4912eefd4/backstage/img/upload"
      beforeUpload={beforeUpload}
      onChange={handleChange}
      fileList={fileList}
    >
      {fileList.length >= 8 ? null : uploadButton}
    </Upload>
  );
};

// export default ImageUpload;
