import { Component } from "react";
import Color from "./Color";
import NavBarPalette from "./NavBarPalette";
import Snackbar from "@mui/material/Snackbar";
import React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PaletteFooter from './PaletteFooter'
import { withStyles } from "@mui/styles";
import styles from './styles/PaletteStyles'

class Palette extends Component {
  constructor(props) {
    super(props);
    this.changeLevelHandler = this.changeLevelHandler.bind(this);
    this.changeFormatHandler = this.changeFormatHandler.bind(this);
    this.handleCloseSnack = this.handleCloseSnack.bind(this);
    this.state = { level: 500, format: "hex", isSnackBar: false };
  }

  showColors() {
    const arr = this.props.colors.colors[this.state.level];
    let newArr = [];
    if (this.state.format === "hex") {
      newArr = arr.map((e, i) => {
        return (
          <Color
            showMore={true}
            color={e.hex}
            name={e.name}
            key={i}
            paletteId={this.props.paletteId}
            colorId={e.id}
            formatVal ={this.state.format}
          />
        );
      });
    } else if (this.state.format === "rgb") {
      newArr = arr.map((e, i) => {
        return (
          <Color
            showMore={true}
            color={e.rgb}
            name={e.name}
            key={i}
            paletteId={this.props.paletteId}
            colorId={e.id}
            formatVal ={this.state.format}
          />
        );
      });
    } else {
      newArr = arr.map((e, i) => {
        return (
          <Color
            color={e.rgba}
            showMore={true}
            name={e.name}
            key={i}
            paletteId={this.props.paletteId}
            colorId={e.id}
            formatVal ={this.state.format}
          />
        );
      });
    }
    return newArr;
  }

  changeLevelHandler(lvl) {
    this.setState({ level: lvl });
  }

  changeFormatHandler(e) {
    this.setState({ format: e, isSnackBar: true });
  }

  handleCloseSnack() {
    this.setState({ isSnackBar: false });
  }

  render() {
    const { paletteId,classes } = this.props;
    const { level, format, isSnackBar } = this.state;
    const closeAction = (
      <React.Fragment>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          key="close"
          onClick={this.handleCloseSnack}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
    return (
      <div className={classes.Palette}>
        <NavBarPalette
          changeLevel={this.changeLevelHandler}
          curLevel={level}
          changeFormat={this.changeFormatHandler}
        />
        <div className={classes.PaletteColors}>{this.showColors()}</div>
        <div>
          <Snackbar
            open={isSnackBar}
            message={<span>Changed to {format.toUpperCase()}</span>}
            action={closeAction}
            color="inherit"
            autoHideDuration={3000}
            onClose={this.handleCloseSnack}
          />
        </div>
        <PaletteFooter paletteName ={this.props.colors.paletteName} emoji={this.props.colors.emoji}/>
        
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
