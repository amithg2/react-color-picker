import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@mui/styles";
import styles from "./styles/HomeStyles";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { blue, red } from "@mui/material/colors";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  Avatar,
  Dialog,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

class Home extends Component {
  constructor(props) {
    super(props);
    this.goToPalette = this.goToPalette.bind(this);
    this.handleDialogDeleteOpen = this.handleDialogDeleteOpen.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.closeDialog = this.closeDialog.bind(this)
    this.state ={isDialogDeleteOpen: false, atemptToDelete: ''}
}

  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  closeDialog() {
    this.setState({isDialogDeleteOpen: false, atemptToDelete: ''})

  }
  handleDialogDeleteOpen(id) {
      this.setState({isDialogDeleteOpen: true, atemptToDelete: id})
  }

  handleDelete () {
    this.props.deletePalette(this.state.atemptToDelete)
    this.closeDialog()
  }

  showAllPalettes() {
    const arr = this.props.palettes.map((e) => {
      return (
        <CSSTransition key={e.id} timeout={500} classNames="fade">
          <MiniPalette
            name={e.paletteName}
            emoji={e.emoji}
            colors={e.colors}
            id={e.id}
            deletePalette={() => this.handleDialogDeleteOpen (e.id)}
            handleClick={() => this.goToPalette(e.id)}
          />
        </CSSTransition>
      );
    });
    return arr;
  }
  render() {
    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.container}>
          <nav className={this.props.classes.nav}>
            <h1>react color!</h1>
            <Link to="/palette/new">New Palette</Link>
          </nav>
          <TransitionGroup className={this.props.classes.palettes}>
            {this.showAllPalettes()}
          </TransitionGroup>
        </div>
        <Dialog open={this.state.isDialogDeleteOpen}>
          <DialogTitle>Are you sure?</DialogTitle>
          <ListItem button onClick={this.handleDelete}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Delete" />
          </ListItem>
          <ListItem button onClick={this.closeDialog}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: red[100], color: red[600] }}>
                <CloseIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Cancel" />
          </ListItem>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(Home);
