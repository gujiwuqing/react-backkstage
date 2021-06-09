import React, { useState } from 'react';
// 引入编辑器组件
import BraftEditor from 'braft-editor';
import CodeHighlighter from 'braft-extensions/dist/code-highlighter';
import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/code-highlighter.css';
// 引入编辑器样式

const EditorDemo = () => {
  const [editorState, setEditorState] = useState(
    BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'),
  );
  BraftEditor.use(
    CodeHighlighter({
      includeEditors: ['editor-with-code-highlighter'],
    }),
  );
  const preview = () => {
    if (window.previewWindow) {
      window.previewWindow.close();
    }

    window.previewWindow = window.open();
    window.previewWindow.document.write(buildPreviewHtml());
    window.previewWindow.document.close();
  };

  const buildPreviewHtml = () => {
    console.log(editorState);
    return `
      <!Doctype html>
      <html>
        <head>
          <title>Preview Content</title>
          <style>
            html,body{
              height: 100%;
              margin: 0;
              padding: 0;
              overflow: auto;
              background-color: #f1f2f3;
            }
            .container{
              box-sizing: border-box;
              width: 1000px;
              max-width: 100%;
              min-height: 100%;
              margin: 0 auto;
              padding: 30px 20px;
              overflow: hidden;
              background-color: #fff;
              border-right: solid 1px #eee;
              border-left: solid 1px #eee;
            }
            .container img,
            .container audio,
            .container video{
              max-width: 100%;
              height: auto;
            }
            .container p{
              white-space: pre-wrap;
              min-height: 1em;
            }
            .container pre{
              padding: 15px;
              background-color: #f1f1f1;
              border-radius: 5px;
            }
            .container blockquote{
              margin: 0;
              padding: 15px;
              background-color: #f1f1f1;
              border-left: 3px solid #d1d1d1;
            }
          </style>
        </head>
        <body>
          <div class="container">${editorState.toHTML()}</div>
        </body>
      </html>
    `;
  };

  const excludeControls = [
    'letter-spacing',
    'line-height',
    'clear',
    'headings',
    'list-ol',
    'list-ul',
    'remove-styles',
    'superscript',
    'subscript',
    'hr',
    'text-align',
  ];

  const extendControls: any = [
    {
      key: 'custom-button',
      type: 'button',
      text: '预览',
      onClick: preview,
    },
  ];

  const submitContent = async () => {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const htmlContent = editorState.toHTML();
  };

  const handleEditorChange = (editorState: any) => {
    console.log(editorState.toHTML());
    setEditorState(editorState);
  };

  return (
    <div className="my-component">
      <BraftEditor
        // excludeControls={excludeControls}
        id="editor-with-code-highlighter"
        extendControls={extendControls}
        value={editorState}
        onChange={handleEditorChange}
        onSave={submitContent}
      />
    </div>
  );
};

export default EditorDemo;
