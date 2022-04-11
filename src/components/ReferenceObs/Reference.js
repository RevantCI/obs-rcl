import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MdToJson from "../MdToJson/MdToJson";

const Reference = ({ data }) => {
  const [obsStory, setObsStory] = useState(null);

  useEffect(() => {
    setObsStory(MdToJson(data ?? ""));
  }, [data]);

  return (
    <>
      {data ? (
        <div className="container">
          {obsStory?.title && (
            <div
              className="text-2xl border-2 bg-gray-300 border-solid p-2 font-serif"
              key={obsStory.title}
            >
              <h1>{obsStory.title}</h1>
            </div>
          )}
          {obsStory?.story &&
            obsStory.story.map(
              (story) =>
                story.text && (
                  <div
                    className="grid grid-cols-2 m-4 p-4 border-solid border-2 border-gray-200 rounded-md "
                    key={story.text}
                  >
                    <div className="w-9/12 flex items-center ">
                      <img
                        src={story.img}
                        alt="Avatar"
                        className="rounded-lg border-2"
                      />
                    </div>
                    <div className="text-justify p-2 text-sm">{story.text}</div>
                  </div>
                )
            )}
          {obsStory?.end && (
            <div className="text-xl bg-gray-300 border-2 p-2 font-serif">
              <h1>{obsStory.end}</h1>
            </div>
          )}
          {obsStory?.error && (
            <div className="text-xl bg-red-500 border-2 p-2 font-serif">
              <h1 className="text-white">{obsStory.error}</h1>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
Reference.propTypes = {
  data: PropTypes.string,
};
export default Reference;
