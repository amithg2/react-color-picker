import React, { Component } from "react";
import Color from "./Color";
import NavBarPalette from "./NavBarPalette";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";
import { withStyles } from "@mui/styles";
import styles from "./styles/SinglePaletteStyles";

class SinglePalette extends Component {
  constructor(props) {
    super(props);
    this.changeFormatHandler = this.changeFormatHandler.bind(this);
    this.handleCloseSnack = this.handleCloseSnack.bind(this);

    this.state = {
      singlePalette: this.makeSinglePalette(),
      format: "hex",
      isSnackBar: false,
    };
  }

  makeSinglePalette() {
    const colors = this.props.colors.colors;
    const id = this.props.id;
    const singlePalette = [];

    for (let color in colors) {
      const col = this.props.colors.colors[color];
      (function () {
        for (let i = 0; i < col.length; i++) {
          if (col[i].id === id) {
            singlePalette.push(col[i]);
          }
        }
      })();
    }

    singlePalette.shift();

    return singlePalette;
  }

  changeFormatHandler(e) {
    this.setState({ format: e, isSnackBar: true });
  }

  makeColorBoxses() {
    let colorBoxes = [];
    if (this.state.format === "hex") {
      colorBoxes = this.state.singlePalette.map((e, i) => {
        return (
          <Color
            color={e.hex}
            name={e.name}
            key={`${e.id}${i}`}
            showMore={false}
          />
        );
      });
    }
    if (this.state.format === "rgb") {
      colorBoxes = this.state.singlePalette.map((e, i) => {
        return (
          <Color
            color={e.rgb}
            name={e.name}
            key={`${e.id}${i}`}
            showMore={false}
          />
        );
      });
    }
    if (this.state.format === "rgba") {
      colorBoxes = this.state.singlePalette.map((e, i) => {
        return (
          <Color
            color={e.rgba}
            name={e.name}
            key={`${e.id}${i}`}
            showMore={false}
          />
        );
      });
    }

    return colorBoxes;
  }

  handleCloseSnack() {
    this.setState({ isSnackBar: false });
  }

  render() {
    const { classes } = this.props;
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
          changeFormat={this.changeFormatHandler}
          formatVal={this.state.format}
        />
        <Snackbar
          open={this.state.isSnackBar}
          message={<span>Changed to {this.state.format.toUpperCase()}</span>}
          action={closeAction}
          color="inherit"
          autoHideDuration={3000}
          onClose={this.handleCloseSnack}
        />
        <div className={classes.PaletteColors}>
          {this.makeColorBoxses()}
          <div className={classes.backBtn} style={{ backgroundColor: "black" }}>
            <Link
              to={`/palette/${this.props.colors.id}`}
              className={classes.back}
            >
              <p>Back</p>
            </Link>
          </div>
        </div>
        ;
        <PaletteFooter
          paletteName={this.props.colors.paletteName}
          emoji={this.props.colors.emoji}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SinglePalette);
