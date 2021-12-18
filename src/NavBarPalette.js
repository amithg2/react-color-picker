import { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { Link } from "react-router-dom";
import { withStyles } from "@mui/styles";
import styles from "./styles/NavBarPaletteStyles";

class NavBarPalette extends Component {
  constructor(props) {
    super(props);
    this.handleChangeOnNav = this.handleChangeOnNav.bind(this);
    this.changeFormatNavBar = this.changeFormatNavBar.bind(this);
  }

  handleChangeOnNav(evt) {
    this.props.changeLevel(evt);
  }

  changeFormatNavBar(e) {
    this.props.changeFormat(e.target.value);
  }

  render() {
    const { curLevel, classes } = this.props;
    return (
      <header className={classes.header}>
        <Link to="/" className={classes.logo}>
          reactcolorpicker
        </Link>
        <Link to="/" className={classes.smallLogo}>
          R
        </Link>
        {curLevel && (
          <div className={classes.NavSlider}>
            <p>Level: {curLevel}</p>
            <Slider
              min={100}
              max={900}
              step={100}
              defaultValue={curLevel}
              onAfterChange={this.handleChangeOnNav}
            />
          </div>
        )}

        <div className={classes.selectLayout}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth onChange={this.changeFormatNavBar}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Format
              </InputLabel>
              <NativeSelect defaultValue={this.props.formatVal || "hex"}>
                <option value="hex">HEX - #ffffff</option>
                <option value="rgb">RGB - rgb(255,255,255)</option>
                <option value="rgba">RGBA - rgba(255,255,255,1.0)</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </div>
      </header>
    );
  }
}

export default withStyles(styles)(NavBarPalette);
