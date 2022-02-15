Called by `MdToJson` to passed md string and return json object

```jsx
import { Grid } from "@material-ui/core";
import MdToJson from "../MdToJson/MdToJson";

const json = MdToJson(
  "# 9. God Calls Moses\n\n_A Bible story from: Exodus 1-4_"
);
<>
  {json.map((story) => (
    <Grid container key={story.id}>
      {story.title && (
        <Grid item xs={12}>
          <h1>{story.title}</h1>
        </Grid>
      )}
      {story.end && (
        <Grid item xs={12}>
          <h1>{story.end}</h1>
        </Grid>
      )}
    </Grid>
  ))}
</>;
```
