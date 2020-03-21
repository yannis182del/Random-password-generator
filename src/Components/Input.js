import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  input: {
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "black",
      fontSize: 20,
      fontWeight: 400,
      letterSpacing: "2px",
    },
    width: "20% ",
    padding: "0 20px",
    outline: " 1px #2e2e2e",
    border: " 1px #2e2e2e ",
    position: "relative",
    minWidth: "300px",
    height: "48px",
    borderRadius: "10px"
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
