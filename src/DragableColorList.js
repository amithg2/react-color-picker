import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DragableColorBox from "./DragableColorBox";


const DragableColorList = SortableContainer(({ handleClickDelete, 
allColors }) => {


  if (allColors) {
    const newArr = allColors.map((e, i) => (
      <DragableColorBox
        color={e.color}
        name={e.name}
        index={i}
        key={i}
        handleClickDelete={handleClickDelete}
      />
    ));
    return <div style={{ height: "100%" }}>{newArr}</div>;
  } else {
    return <h1>asda</h1>;
  }
});

export default DragableColorList;
