import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  input: {
    width: "30% ",
    padding: "0 20px",
    outline: " 1px #2e2e2e",
    border: " 1px #2e2e2e ",
    color: "green",
    letterSpacing: "2px",
    fontSize: 20,
    fontWeight: 200,
    position: "relative",
    minWidth: "300px",
    height: "48px",
    borderRadius: "3px",
    transition: "all .25s cubic-bezier(.645,.045,.355,1)"
  }
};

const Input = props => {
  const { classes } = props;
  return (
    <input
      className={classes.input}
      onClick={props.save}
      placeholder={props.label}
      disabled
    />
  );
};

export default withStyles(styles)(Input);
