import PropTypes from "prop-types";

const MdToJson = (data) => {
  //convert md file text into json object
  //render story from json array object
  let story = [];
  let id = 0;
  const allLines = data.split(/\r\n|\n/);
  let title = "";
  let end = "";
  let error = "";
  // Reading line by line
  try {
    allLines.forEach((line) => {
      if (line) {
        if (line.match(/^#/gm)) {
          const hash = line.match(/# (.*)/);
          title = hash[1];
        } else if (line.match(/^_/gm)) {
          const underscore = line.match(/_(.*)_/);
          end = underscore[1];
        } else if (line.match(/^!/gm)) {
          id += 1;
          const imgUrl = line.match(/\((.*)\)/);
          story.push({
            id,
            img: imgUrl[1],
          });
        } else {
          story[id - 1].text = line;
        }
      }
    });
  } catch (e) {
    error = "Error parsing OBS md file text";
    title = "";
    end = "";
    story = [];
  }

  return { title, story, end, error };
};
MdToJson.propTypes = {
  data: PropTypes.string,
};
export default MdToJson;
