### Generate OBS Files Json

Helper function to generate the 50 Files for OBS

```jsx
import { useState, useEffect } from "react";
import Reference from "../Reference/Reference";
import Switch from "../Switch/Switch";

const [storyId, setStoryId] = useState(1);
const [imageUrl, setImageUrl] = useState("");
const [stories, setStories] = useState(GenerateProject(""));
const [preview, setPreview] = useState(false);

useEffect(() => {
  setStories(GenerateProject(imageUrl));
}, [imageUrl]);

const downloadText = () => {
  const element = document.createElement("a");
  const file = new Blob([stories[storyId - 1].story], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = storyId + ".md";
  console.log("test")
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
};
const setStory = (event) => {
  setStoryId(event.target.value);
};
const setUrl = (event) => {
  setImageUrl(event.target.value);
};
const handlePreview = (e) => {
  setPreview(!preview);
};
<>
  {stories ? (
    <div>
      <div className="flex flex-row my-2">
        <label htmlFor="stories" >Story</label>
        <select onChange={setStory} name="stories" id="stories" value={storyId} className="h-6 mx-2" >
          {stories.map((story) => (
            <option value={story.storyId} key={story.storyId}>
              {story.storyId}
            </option>
          ))}
        </select>
        <input type="text" placeholder="image Base URL" className="rounded-lg px-5 border border-gray-300 mx-2" value={imageUrl} onChange={setUrl} />
        <button type="button" className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 rounded-lg px-5 py-1 mx-2" onClick={downloadText}>Download</button>
        <Switch value={preview} onChange={handlePreview} label="Preview" />
      </div>
      <div className="h-96 overflow-auto flex flex-col">
        {preview ? (
          <Reference data={stories[storyId - 1].story} />
        ) : (
          <textarea
            className="w-full flex h-full"
            value={stories.length > 0 ? stories[storyId - 1].story : ""}
            readOnly
          ></textarea>
        )}
      </div>
    </div>
  ) : (
    "Generating Stories"
  )}
</>;
```
