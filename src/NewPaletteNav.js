import React, { Component } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { withStyles } from "@mui/styles";
import SavePaletteDialog from "./SavePaletteDialog";
import {styles,AppBar} from './styles/newPaletteNavStyles'


class NewPaletteNav extends Component {
  render() {
    const {
      open,
      handleDrawerOpen,
      handleSavePalette,
      paletteName,
      handlePaletteNameChange,
      classes,
    } = this.props;
    return (
      <div>
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 0, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Create Palette
            </Typography>
          </Toolbar>
          <div style={styles.buttons} >
            <SavePaletteDialog
              style={{ zInddex: "30" }}
              handleSavePalette={handleSavePalette}
              paletteName={paletteName}
              handlePaletteNameChange={handlePaletteNameChange}
              classes={classes}
            />
            <Link to="/" style={{margin: '0.8rem', textDecoration : 'none'}}>
              <Button variant="contained" color="error" type="submit" >
                Back
              </Button>
            </Link>
          </div>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NewPaletteNav);
