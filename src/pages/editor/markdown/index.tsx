import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import { Button, Form } from 'antd';

const mdParser = new MarkdownIt(/* Markdown-it options */);

const Markdown = () => {
  // Finish!
  function handleEditorChange({ html, text }: any) {
    // console.log('handleEditorChange', html)
  }
  return (
    <>
      <MdEditor
        style={{ height: '500px' }}
        name="content"
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
    </>
  );
};

export default Markdown;
