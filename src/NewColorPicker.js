import React, { Component } from "react";
import { SketchPicker } from "react-color";
import { Button } from "@mui/material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withStyles } from "@mui/styles";
import styles from './styles/NewColorPickerStyles'

class NewColorPicker extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      color,
      changeColorHandler,
      handleColorNameChange,
      colorName,
      allColors,
      handleColorChange,
      classes
    } = this.props;

    return (
      <div className={classes.container}>
        <SketchPicker color={color} onChangeComplete={handleColorChange} className={classes.picker} />

        <ValidatorForm
          onSubmit={changeColorHandler}
          onError={(errors) => console.log(errors)}
        >
          <TextValidator
            id="colorName"
            label="Color Name"
            variant="outlined"
            margin="normal"
            name="colorName"
            onChange={handleColorNameChange}
            value={colorName}
            validators={["required", "isColorNameUniqe", "isColorUniqe"]}
            errorMessages={[
              "this field is required",
              "Color name must be uniqe",
              "This color is already on the palette!",
            ]}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
            disabled={allColors.length >= 20 ? true : false}
            style={{ backgroundColor: color }}
            style={
              allColors.length >= 20
                ? { backgroundColor: "grey" }
                : { backgroundColor: color }
            }
          >
            {allColors.length >= 20 ? "Palette is Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(NewColorPicker);
