import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DragableColorBox from "./DragableColorBox";

const DragableColorList = SortableContainer(
  ({ allColors, handleClickDelete }) => {
    if (allColors) {
      return (
        <div style={{ height: "100%" }}>
          {allColors.map((e, i) => (
            <DragableColorBox
              color={e.color}
              name={e.name}
              index={i}
              key={i}
              handleClickDelete={handleClickDelete}
            />
          ))}
        </div>
      );
    } else {
      return null;
    }
  }
);

export default DragableColorList;
