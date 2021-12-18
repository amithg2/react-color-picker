import React from "react";
import { withStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { SortableElement } from "react-sortable-hoc";
import styles from "./styles/DragableColorBoxStyles";

const DragableColorBox = SortableElement((props) => {
  const handleDelete = (e) => {
    props.handleClickDelete(name);
  };
  const { classes, color, name } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <p className={classes.colorName}>{name}</p>
        <DeleteIcon className={classes.deleteIcon} onClick={handleDelete} />
      </div>
    </div>
  );
});

export default withStyles(styles)(DragableColorBox);
