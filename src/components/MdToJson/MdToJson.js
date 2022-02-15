import PropTypes from "prop-types";

const MdToJson = (data) => {
  //read only md files and put at js variables
  //convert md files into json array object
  //render stories from json array object
  const stories = [];
  let id = 1;
  const allLines = data.split(/\r\n|\n/);
  // Reading line by line
  allLines.forEach((line) => {
    if (line) {
      if (line.match(/^#/gm)) {
        const hash = line.match(/# (.*)/);
        stories.push({
          id,
          title: hash[1],
        });
        id += 1;
      } else if (line.match(/^_/gm)) {
        const underscore = line.match(/_(.*)_/);
        stories.push({
          id,
          end: underscore[1],
        });
        id += 1;
      } else if (line.match(/^!/gm)) {
        const imgUrl = line.match(/\((.*)\)/);
        stories.push({
          id,
          img: imgUrl[1],
        });
      } else {
        const objIndex = stories.findIndex((obj) => obj.id === id);
        stories[objIndex].text = line;
        id += 1;
      }
    }
  });
  return stories;
};
MdToJson.propTypes = {
  data: PropTypes.string,
};
export default MdToJson;
