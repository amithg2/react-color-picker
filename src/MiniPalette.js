import React from "react";
import { withStyles } from "@mui/styles";
import styles from "./styles/MiniPaletteStyles";
import DeleteIcon from "@mui/icons-material/Delete";

function MiniPalette(props) {
  const { classes, colors } = props;
  const miniColorBox = colors.map((color) => {
    return (
      <div
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
        key={color.name}
      />
    );
  });

  const handleDeleteInMini = (e) => {
    e.stopPropagation();
    props.deletePalette(props.id);
  };

  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.delete}>
        <DeleteIcon
          className={classes.deleteIcon}
          style={{ transition: "all 0.25s ease-in" }}
          onClick={handleDeleteInMini}
        />
      </div>
      <div className={classes.colors}>{miniColorBox}</div>
      <h5 className={classes.title}>
        {props.name} <span>{props.emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
