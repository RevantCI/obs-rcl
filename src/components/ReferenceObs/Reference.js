import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MdToJson from "../MdToJson/MdToJson";

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    backgroundColor: "#eee",
  },
  content: {
    width: "100%",
  },
  controlsDiv: {
    marginTop: "10px",
  },
  controls: {
    border: "1px solid grey",
    width: "50vw",
    textAlign: "left",
    padding: "10px",
  },
  obrRow: {
    margin: "3px",
    border: "2px solid #eee",
    borderRadius: "10px",
  },
  img: {
    width: "250px",
    borderRadius: "10px",
  },
  input: {
    display: "none",
  },
}));

const Reference = (props) => {
  const { title, text, data } = props;
  console.log(typeof title);
  const classes = useStyles();
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
            <Grid container key={story.id}>
              {story.title && (
                <Grid item xs={12}>
                  <h1 className={title}>{story.title}</h1>
                </Grid>
              )}
              {story.text && (
                <Grid container spacing={2} className={classes.obrRow}>
                  <Grid item xs={5}>
                    <img src={story.img} alt="" className={classes.img} />
                  </Grid>
                  <Grid item xs={7} className={text}>
                    {story.text}
                  </Grid>
                </Grid>
              )}
              {story.end && (
                <Grid item xs={12}>
                  <h1>{story.end}</h1>
                </Grid>
              )}
            </Grid>
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
