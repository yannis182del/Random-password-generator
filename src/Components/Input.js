import React from "react";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

const styles = {
  root: {
    width: "350px",
    boxShadow: "0 8px 3px -7px rgba(0, 0, 0, 0.35)"
  }
};

const Input = props => {
  const { classes } = props;
  return (
    <TextField
      className={classes.root}
      InputProps={{
        readOnly: true,
        className: classes.input,
        endAdornment: (
          <InputAdornment>
            <IconButton>
              <FileCopyOutlinedIcon onClick={props.save} />
            </IconButton>
          </InputAdornment>
        )
      }}
      label={props.label}
      id="outlined-disabled"
      variant="outlined"
      disabled
    />
  );
};

export default withStyles(styles)(Input);
