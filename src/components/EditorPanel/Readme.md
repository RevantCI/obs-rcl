### Editor Panel

Editor Panel Demo

```js
import React, { useState, useEffect } from "react";
import EditorPanel from "./EditorPanel";
import Switch from "../Switch/Switch";

const [data, setData] = useState();
const [showFileName, setShowFileName] = useState("");
const [showImage, setShowImage] = useState(false);

const handleChange = () => {
  setShowImage(!showImage);
};

const loadMdText = (event) => {
  var file = event.target.files[0];
  setShowFileName(file.name);
  let reader = new FileReader();
  reader.onload = function (e) {
    setData(e.target.result);
  };
  reader.readAsText(file);
};

<>
  <div className="grid grid-cols-3">
    <div className="p-2 ">
      <label htmlFor="editor-panel-file">
        <span className="border-2 p-2 rounded-md bg-blue-700 font-serif text-white uppercase">
          select md file
        </span>
      </label>
      <input
        id="editor-panel-file"
        type="file"
        accept=".md"
        onChange={loadMdText}
        className="hidden"
      />
    </div>
    <div className="p-2 m-2">
      <span>{showFileName}</span>
    </div>
    <div className="p-2">
      <Switch value={showImage} onChange={handleChange} label="Show Image" />
    </div>
  </div>
  <EditorPanel data={data} showImage={showImage} setData={setData} />
</>;
```
