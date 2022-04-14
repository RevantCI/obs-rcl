### Reference OBS

```js
import React, { useState } from "react";
import Reference from "./Reference";

const [data, setData] = useState();
const [showFileName, setShowFileName] = useState("");

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
  <div className="grid grid-cols-2">
    <div className="p-2 ">
      <label htmlFor="raised-button-file">
        <span className="border-2 p-2 rounded-md bg-blue-700 font-serif text-white uppercase">
          select md file
        </span>
      </label>
      <input
        id="raised-button-file"
        type="file"
        accept=".md"
        onChange={loadMdText}
        className="hidden"
      />
    </div>
    <div className="p-2 m-2">
      <span>{showFileName}</span>
    </div>
  </div>
  <Reference data={data} />
</>;
```
