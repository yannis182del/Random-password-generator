import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function PasswordButton(props) {
  const classes = useStyles();

  return (
    <div>
      <Button onClick={props.onClick} size="medium" className={classes.margin}>
       {props.title}
      </Button>
    </div>
  );
}
