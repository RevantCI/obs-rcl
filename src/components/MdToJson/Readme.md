Called by `MdToJson` to passed md string and return json object

```jsx
import MdToJson from "../MdToJson/MdToJson";

const json = MdToJson(
  "# 9. God Calls Moses\n\n_A Bible story from: Exodus 1-4_"
);
<>
  {json.map((story) => (
    <div className="container" key={story.id}>
      {story.title && (
        <div className="text-2xl mb-3 border-2 bg-gray-400 p-2 font-serif">
          <h1>{story.title}</h1>
        </div>
      )}
      {story.end && (
        <div className="text-xl font-serif">
          <h1>{story.end}</h1>
        </div>
      )}
    </div>
  ))}
</>;
```
