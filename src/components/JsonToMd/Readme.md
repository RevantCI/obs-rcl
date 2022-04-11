Generate OBS Files Json

```jsx
import OBSData from "../../store/OBSData.json";

const json = JsonToMd(OBSData[0],"");

<textarea
rows="20"
style={{ width: "100%" }}
value={json}
readOnly
></textarea>
```
