import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

function SavePaletteDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [openEmoji, setOpenEmoji] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenEmoji(false)
  };
  const openEmojiPage = () => {
    setOpenEmoji(true);
  };
  const savingPalette = (emoji) => {
    props.handleSavePalette(emoji.native);
  };

  const {  paletteName, handlePaletteNameChange, classes } =
    props;
  return (
    <div style={{ zIndex: "30", flexDirection: "column", display: "flex" }}>
      <Button variant="contained" onClick={handleClickOpen} color="secondary">
        Save
      </Button>
      {!openEmoji ? (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Name the palette</DialogTitle>
          <ValidatorForm
            onSubmit={openEmojiPage}
            className={classes.validateForm}
          >
            <TextValidator
              id="palette Name"
              label="Palette name"
              variant="outlined"
              value={paletteName}
              onChange={handlePaletteNameChange}
              name="PaletteName"
              validators={["required", "isUniqePaletteName"]}
              errorMessages={[
                "Palette mush have a name",
                "Palette name must be uniqe",
              ]}
            />
            <Button variant="contained" color="error" type="submit">
              Next
            </Button>
            
          </ValidatorForm>

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      ) : (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Give it an emoji!</DialogTitle>
          <Picker onClick={savingPalette}/>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}

export default SavePaletteDialog;
