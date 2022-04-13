### Function used to convert OBS MD file format to OBS json object

Format

```jsx
import React, { useState } from "react";
import OBSData from "../../store/OBSData.json";
import JsonToMd from "../JsonToMd/JsonToMd";
import Reference from "../Reference/Reference";
import Switch from "../Switch/Switch";
import ReactJson from "react-json-view";

const [preview, setPreview] = useState(false);

const handlePreview = (e) => {
  setPreview(!preview);
};

const md = JsonToMd(OBSData[0], "");
const json = MdToJson(md);
const data = JsonToMd(json, "");

<>
  <Switch value={preview} onChange={handlePreview} label="Preview-JSON" />
  <div className="h-96 overflow-auto flex flex-col">
    {preview ? (
      <Reference data={data} />
    ) : (
      <div className="flex flex-col h-96 mt-2">
        <p className="text-lg pl-2 bg-slate-200">Markdown</p>
        <textarea className="w-full flex h-40" value={md} readOnly></textarea>
        <p className="text-lg pl-2 bg-slate-200">JSON</p>
        <div className="h-40 overflow-auto">
          <ReactJson src={json} />
        </div>
      </div>
    )}
  </div>
</>;
```
