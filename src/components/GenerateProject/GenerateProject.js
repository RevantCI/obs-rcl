import PropTypes from "prop-types";
import OBSData from "../../store/OBSData.json";
import JsonToMd from "../JsonToMd/JsonToMd";

export default function GenerateProject(imageUrl) {
  return OBSData.map((story) => ({
      storyId:story.storyId,
      story: JsonToMd(story, imageUrl),
    }
  ));
}
GenerateProject.propTypes = {
  imageUrl: PropTypes.string,
};
