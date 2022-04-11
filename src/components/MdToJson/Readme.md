Called by `MdToJson` to passed md string and return json object

```jsx
import MdToJson from "../MdToJson/MdToJson";

const json = MdToJson(
  "# 9. God Calls Moses\n\n_A Bible story from: Exodus 1-4_"
);
<>
  <div className="container">
    <div className="text-2xl mb-3 border-2 bg-gray-400 p-2 font-serif">
      <h1>{json.title}</h1>
    </div>
    <div className="text-xl font-serif">
      <h1>{json.end}</h1>
    </div>
  </div>
</>;
```
