import { withStyles } from "@mui/styles";
import styles from './styles/PaletteFooterStyles'

function PaletteFooter(props) {
    const {classes} = props
  return (
    <footer className={classes.PaletteFooter}>
      <p>{props.paletteName}</p>
      <span className={classes.emoji}>{props.emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter);
