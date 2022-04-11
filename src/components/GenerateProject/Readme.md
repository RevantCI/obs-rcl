### Generate OBS Files Json

Helper function to generate the 50 Files for OBS

```jsx
import { useState, useEffect } from "react";
import Reference from "../Reference/Reference";

const [storyId, setStoryId] = useState(1);
const [imageUrl, setImageUrl] = useState("");
const [stories, setStories] = useState(GenerateProject(""));

useEffect(() => {
  setStories(GenerateProject(imageUrl));
}, [imageUrl]);

const downloadText = () => {
  const element = document.createElement("a");
  const file = new Blob([stories[storyId - 1].story], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = storyId.toLowerCase() + ".md";
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
};
const setStory = (event) => {
  setStoryId(event.target.value);
};
const setUrl = (event) => {
  setImageUrl(event.target.value);
};
<>
  {stories ? (
    <div>
      <label htmlFor="stories">Stories</label>
      <select onChange={setStory} name="stories" id="stories" value={storyId}>
        {stories.map((story) => (
          <option value={story.storyId} key={story.storyId}>
            {story.storyId}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="image Base URL"
        value={imageUrl}
        onChange={setUrl}
      />
      <button type="button" onClick={downloadText}>
        Download
      </button>
      <Reference data={stories[storyId - 1].story} />
    </div>
  ) : (
    "Generating Stories"
  )}
</>;
```
