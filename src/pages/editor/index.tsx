import React, { useState } from 'react';
// 引入编辑器组件
import BraftEditor from 'braft-editor';
// 引入编辑器样式
import ';/dist/index.css';

const EditorDemo = () => {
  const [editorState, setEditorState] = useState(
    BraftEditor.createEditorState(null),
  );

  const submitContent = async () => {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const htmlContent = editorState.toHTML();
  };

  const handleEditorChange = (value: any) => {
    setEditorState(value);
  };

  return (
    <div className="my-component">
      <BraftEditor
        value={editorState}
        onChange={handleEditorChange}
        onSave={submitContent}
      />
    </div>
  );
};

export default EditorDemo;
