Called by `ObsNavigation` to json object

```js
import React, { useState } from "react";
import ObsNavigation from "./ObsNavigation";

const [open, setOpen] = useState(false);
const [value, setValue] = useState("");

const handleOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};

const onChange = (value) => {
  setValue(value);
};

<>
  <div className="container">
    <button
      className="bg-blue-700 text-white active:bg-blue-700 font-bold px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
      type="button"
      onClick={handleOpen}
    >
      Open OBS
    </button>
    <ObsNavigation
      open={open}
      value={value}
      onChange={onChange}
      handleClose={handleClose}
    />
  </div>
</>;
```
