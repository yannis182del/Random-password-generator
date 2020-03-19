import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    background: "transparent",
    border: "2px solid #fff",
    borderRadius: "50rem",
    fontSize: '20px',
    marginTop: "3%",
    transition: "all 0.3 ease",
    cursor: "pointer",
    padding: "20px",
    color: "white"
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
