import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Button } from "@mui/material";
import { ValidatorForm } from "react-material-ui-form-validator";
import DragableColorList from "./DragableColorList";
import { arrayMove } from "react-sortable-hoc";
import getRand from "./randData";
import NewPaletteNav from "./NewPaletteNav";
import NewColorPicker from "./NewColorPicker";
import { Main, DrawerHeader, mainButtons } from "./styles/NewPaletteStyles";
const drawerWidth = 300;

export default function NewPalette(props) {
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState("");
  const [allColors, setAllColors] = React.useState("");
  const [colorName, setColorName] = React.useState("");
  const [paletteName, setPaletteName] = React.useState("");
  const [runPalette, setRunPalette] = React.useState(true);
  const allPaletteNames = props.allPaletteNames;

  useEffect(() => {
    ValidatorForm.addValidationRule("isUniqePaletteName", (value) => {
      let val = true;
      allPaletteNames.filter((e) => {
        if (e === value) {
          val = false;
        }
      });
      return val;
    });
    ValidatorForm.addValidationRule("isColorNameUniqe", (value) => {
      let val = true;
      allColors.filter((e) => {
        if (e.name === value) {
          val = false;
        }
      });
      return val;
    });
    ValidatorForm.addValidationRule("isColorUniqe", (value) => {
      let val = true;

      allColors.filter((e) => {
        if (e.color === color) {
          val = false;
        }
      });
      return val;
    });

    if (runPalette) {
      getPalette();
    }
  });
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleColorChange = (e) => {
    setColor(e.hex);
  };
  const changeColorHandler = (e) => {
    const newColor = {
      color: color,
      name: colorName,
    };
    setAllColors([...allColors, newColor]);
    setColorName("");
  };
  const handleColorNameChange = (e) => {
    setColorName(e.target.value);
  };
  const handlePaletteNameChange = (e) => {
    setPaletteName(e.target.value);
  };
  const handleSavePalette = (emoji) => {
    const newName = paletteName;
    const newPallete = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, "-"),
      emoji: emoji,
      colors: allColors,
    };
    props.savePalette(newPallete);
    props.history.push("/");
  };
  const handleClickDelete = (name) => {
    const newArr = allColors.filter((e) => {
      if (e.name !== name) {
        return e;
      }
    });
    setAllColors(newArr);
  };
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setAllColors((colors) => arrayMove(colors, oldIndex, newIndex));
  };
  const handleClearPalette = () => {
    setAllColors([]);
  };
  const getRandColor = () => {
    if (allColors.length < 20) {
      const rand = Math.floor(Math.random() * 175);
      let randColor = getRand(rand);
      if (allColors.includes(randColor)) {
        const rand = Math.floor(Math.random() * 175);
        randColor = getRand(rand);
      }
      setAllColors([...allColors, randColor]);
    }
  };
  const getPalette = () => {
    setTimeout(() => {
      const paletteArr = [];
      const rand = Math.floor(Math.random() * 175);
      let randColor = getRand(rand);
      paletteArr.push(randColor);
      while (paletteArr.length < 20) {
        const rand = Math.floor(Math.random() * 175);
        let randColor = getRand(rand);
        paletteArr.push(randColor);
      }
      setRunPalette(false);
      setAllColors(paletteArr);
    }, 500);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NewPaletteNav
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleSavePalette={handleSavePalette}
        paletteName={paletteName}
        handlePaletteNameChange={handlePaletteNameChange}
      />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader style={{ zIndex: "2" }}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div style={mainButtons.h4}>
          <Typography variant="h4">Design Your Pallete</Typography>
          <div>
            <Button
              variant="contained"
              color="error"
              onClick={handleClearPalette}
            >
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="secondary"
              disabled={allColors.length >= 20 ? true : false}
              onClick={getRandColor}
            >
              {allColors.length >= 20 ? "Palette is Full" : "Random Color"}
            </Button>
          </div>
        </div>

        <NewColorPicker
          color={color}
          handleColorChange={handleColorChange}
          changeColorHandler={changeColorHandler}
          handleColorNameChange={handleColorNameChange}
          allColors={allColors}
          colorName={colorName}
        />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <DragableColorList
          onSortEnd={onSortEnd}
          axis="xy"
          allColors={allColors}
          handleClickDelete={handleClickDelete}
        />
      </Main>
    </Box>
  );
}
