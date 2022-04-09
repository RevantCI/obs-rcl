import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MdToJson from "../MdToJson/MdToJson";

const Reference = (props) => {
  const { data } = props;
  const [obsStory, setObsStory] = useState(null);

  useEffect(() => {
    if (data !== undefined) {
      setObsStory(MdToJson(data));
    }
  }, [data]);

  return (
    <>
      {obsStory !== null ? (
        <>
          {obsStory.map((story) => (
            <div className="container" key={story.id}>
              {story.title && (
                <div className="text-2xl border-2 bg-gray-300 border-solid p-2 font-serif">
                  <h1>{story.title}</h1>
                </div>
              )}
              {story.text && (
                <div className="grid grid-cols-2 m-4 p-4 border-solid border-2 border-gray-200 rounded-md ">
                  <div className="w-9/12 flex items-center ">
                    <img
                      src={story.img}
                      alt="Avatar"
                      className="rounded-lg border-2"
                    />
                  </div>
                  <div className="text-justify p-2 text-sm">{story.text}</div>
                </div>
              )}
              {story.end && (
                <div className="text-xl bg-gray-300 border-2 p-2 font-serif">
                  <h1>{story.end}</h1>
                </div>
              )}
            </div>
          ))}
        </>
      ) : (
        ""
      )}
    </>
  );
};
Reference.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  data: PropTypes.string,
};
export default Reference;
