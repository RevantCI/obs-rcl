### Function to convert OBS Json to OBS Markdown format

```jsx
import React, { useState, useEffect } from "react";
import OBSData from "../../store/OBSData.json";
import Reference from "../Reference/Reference";
import Switch from "../Switch/Switch";
import ReactJson from "react-json-view";

const [preview, setPreview] = useState(false);
const json = OBSData[0];
const md = JsonToMd(json, "");

const handlePreview = (e) => {
  setPreview(!preview);
};

<>
  <Switch value={preview} onChange={handlePreview} label="Preview-Markdown" />
  <div className="h-96 overflow-auto flex flex-col">
    {preview ? (
      <Reference data={md} />
    ) : (
      <div className="flex flex-col h-96 mt-2">
        <p className="text-lg pl-2 bg-slate-200">JSON</p>
        <div className="h-40 overflow-auto">
          <ReactJson src={json} />
        </div>
        <p className="text-lg pl-2 bg-slate-200">Markdown</p>
        <textarea className="w-full flex h-40" value={md} readOnly></textarea>
      </div>
    )}
  </div>
</>;
```
