Called by `MdToJson` to passed md string and return json object

```jsx
import OBSData from "../../store/OBSData.json";
import JsonToMd from "../JsonToMd/JsonToMd";
import Reference from "../Reference/Reference";

const md = JsonToMd(OBSData[0],"");
const json = MdToJson(md);
const data = JsonToMd(json,"");

<Reference data={data}/>
```
