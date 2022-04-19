import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MdToJson from "../MdToJson/MdToJson";
import JsonToMd from "../JsonToMd/JsonToMd";
import stripHtmlComments from "strip-html-comments";

const getStory = (obsStory, showImage, setData) => {
  const handleChange = (e) => {
    const index = e.target.getAttribute("data-id");
    const value = e.target.value;
    const story = obsStory.story[index];
    const newStory = {
      id: story.id,
      url: story.url,
      text: value,
    };

    const newStories = obsStory.story.map((story) =>
      story.id !== newStory.id ? story : newStory
    );
    const newData = { ...obsStory };
    newData.story = newStories;
    setData(JsonToMd(newData, ""));
  };

  return obsStory?.story.map((story, index) => (
    <div
      className="flex m-4 p-4 border-solid border-2 border-gray-200 rounded-md h-40"
      key={story.url}
    >
      {showImage && (
        <img
          src={story.url}
          alt="OBS Image"
          className="h-auto flex rounded-lg border-2"
        />
      )}
      <textarea
        name={story.text}
        onChange={handleChange}
        value={story.text}
        data-id={index}
        className="flex-grow text-justify ml-2 p-2 text-sm"
      ></textarea>
    </div>
  ));
};
const getTitle = (obsStory) => {
  return (
    obsStory?.title && (
      <div className="text-2xl border-2 bg-gray-300 border-solid p-2 font-serif">
        <h1>{obsStory.title}</h1>
      </div>
    )
  );
};

const getEnd = (obsStory) => {
  return (
    obsStory?.end && (
      <div className="text-xl bg-gray-300 border-2 p-2 font-serif">
        <h1>{obsStory.end}</h1>
      </div>
    )
  );
};

const EditorPanel = ({ data, showImage, setData }) => {
  const [obsStory, setObsStory] = useState(null);

  useEffect(() => {
    setObsStory(MdToJson(data ?? ""));
  }, [data]);
  return (
    <div className="container">
      {getTitle(obsStory)}
      {getStory(obsStory, showImage, setData)}
      {getEnd(obsStory)}
      {obsStory?.error && (
        <div className="text-xl bg-red-500 border-2 p-2 font-serif">
          <h1 className="text-white">{obsStory.error}</h1>
        </div>
      )}
    </div>
  );
};

EditorPanel.propTypes = {
  data: PropTypes.string,
};

export default EditorPanel;
