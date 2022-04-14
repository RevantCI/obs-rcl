### Switch Button

Switch button demo

```js
import { useState } from "react";

const [value, setValue] = useState(false);
const onChange = (e) => {
  setValue(!value);
};

<>
  <Switch value={value} onChange={onChange} label={"Sample Switch"} />
  <p className="text-lg rounded-lg text-gray-900 bg-white border border-gray-300 p-1 px-2 w-11 ">
    {value ? "On" : "Off"}
  </p>
</>;
```
