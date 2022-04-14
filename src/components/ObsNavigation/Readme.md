Called by `ObsNavigation` to json object

```js
import React, { useState } from "react";
import ObsNavigation from "./ObsNavigation";

const [value, setValue] = useState("1");

const onChange = (value) => {
  setValue(value);
};

<>
  <ObsNavigation value={value} onChange={onChange} />
</>;
```
