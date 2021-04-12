import React from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import Table from 'braft-extensions/dist/table';
import 'braft-extensions/dist/table.css';
import Markdown from 'braft-extensions/dist/markdown';

const Editor = () => {
  // const options = {
  //   defaultColumns: 3, // 默认列数
  //   defaultRows: 3, // 默认行数
  //   withDropdown: false, // 插入表格前是否弹出下拉菜单
  //   columnResizable: false, // 是否允许拖动调整列宽，默认false
  //   exportAttrString: '', // 指定输出HTML时附加到table标签上的属性字符串
  //   includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
  //   excludeEditors: ['editor-id-2'],  // 指定该模块对哪些BraftEditor无效
  // };
  // BraftEditor.use(Table(options));
  // // 以使用表格扩展为例
  BraftEditor.use(
    Table({
      includeEditors: ['editor-1'],
    }),
  );
  const options = {
    includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
    excludeEditors: ['editor-id-2'], // 指定该模块对哪些BraftEditor无效
  };

  BraftEditor.use(Markdown(options));
  // // 使用BraftEditor.createEditorState创建编辑器数据
  const initialValue = BraftEditor.createEditorState('', {
    editorId: 'editor-1',
  });
  return (
    <div>
      <BraftEditor value={initialValue} id="editor-1" />
    </div>
  );
};

export default Editor;
