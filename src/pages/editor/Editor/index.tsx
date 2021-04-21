import React from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
const Editor = () => {
  return (
    <div>
      <BraftEditor
        onChange={(value) => {
          console.log(value.toText().length);
        }}
      />
    </div>
  );
};

export default Editor;
