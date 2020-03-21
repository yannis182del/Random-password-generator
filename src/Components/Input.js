import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FileCopyIcon from "@material-ui/icons/FileCopy";

const styles = {
  input: {
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "black",
      fontSize: 20,
      fontWeight: 400,
      letterSpacing: "2px",
      position: "relative"
    },
    padding: "10px",
    outline: " 1px #2e2e2e",
    border: " 1px #2e2e2e ",
    minWidth: "300px",
    height: "48px",
    borderRadius: "20px"
  },
  icon: {
    fontSize: "60px",
    cursor: "pointer",
    color: "white",
    position: "absolute"
  },
  container: {
    maxWidth: "420px",
    margin: "auto"
  }
};

const Input = props => {
  const { classes } = props;
  return (
    <form>
      <div className={classes.container}>
        <input className={classes.input} placeholder={props.label} disabled />
        <FileCopyIcon onClick={props.save} className={classes.icon} />
      </div>
    </form>
  );
};

export default withStyles(styles)(Input);
