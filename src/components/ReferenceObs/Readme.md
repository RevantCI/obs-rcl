### Reference OBS

```js
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Reference from "./Reference";
import Grid from "@material-ui/core/Grid";
import MdToJson from "../MdToJson/MdToJson";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "25px",
  },
  text: {
    fontSize: "16px",
    direction: "rtl",
  },
  input: {
    display: "none",
  },
}));

const classes = useStyles();
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
  <Grid container spacing={2}>
    <Grid item xs={6}>
      <input
        id="raised-button-file"
        type="file"
        accept=".md"
        onChange={loadMdText}
        className={classes.input}
      />
      <label htmlFor="raised-button-file">
        <Button
          variant="contained"
          color="primary"
          size="small"
          component="span"
        >
          select md file
        </Button>
      </label>
    </Grid>
    <Grid item xs={3}>
      <span>{showFileName}</span>
    </Grid>
  </Grid>
  <Reference title={classes.title} text={classes.text} data={data} />
</>;
```
