import { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@mui/styles";
import styles from './styles/ColorStyles'

class Color extends Component {
  constructor(props) {
    super(props);
    this.handleCopy = this.handleCopy.bind(this);
    this.moreColorHandler = this.moreColorHandler.bind(this);
    this.state = { coied: false };
  }
  handleCopy() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1200);
    });
  }

  moreColorHandler(evt) {
    evt.stopPropagation();
  }
  render() {
    const { name, color, colorId, paletteId,classes } = this.props;
    const { copied } = this.state;
    const lumi = chroma(color).luminance();
    const getColor = (unShade) =>{
        if(unShade) {
            return lumi < 0.5 ? { color: "white" } : { color: "black", textShadow: '2px 4px white' }
        }
        return lumi < 0.5 ? { color: "white" } : { color: "black" };
    }
   
    return (
      <CopyToClipboard text={color} onCopy={this.handleCopy}>
        <div className={classes.Color} style={{ backgroundColor: color }}>
          <div
            className={`${classes.grow} ${copied && classes.growActive}`}
            style={{ backgroundColor: color }}
          ></div>

          <button className={classes.ColorCopy} style={getColor()}>
            Copy
          </button>
          <p className={classes.ColorName} style={getColor()}>
            {name}
          </p>
          {this.props.showMore && (
            <Link
              to={`/palette/${paletteId}/${colorId}`}
              onClick={this.moreColorHandler}
              formatVal={this.props.formatVal}
            >
              <span className={classes.ColorMore} style={getColor()}>
                More
              </span>
            </Link>
          )}

          <div className={`${classes.CopyMsg} ${copied && classes.CopyMsgShow}`}>
            <h1 className={classes.CopyMsgH1} style={getColor('unshade')} >COPIED!</h1>
            <p style={getColor()} className={classes.CopyMsgp}>{color}</p>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(Color);
