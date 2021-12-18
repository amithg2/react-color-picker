import sizes from "./sizeHelpers";

const styles = {
  backBtn: {
    opacity: "1",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "100",
    letterSpacing: "2px",
    [sizes.down("md")]: {
      width: "50%",
      height: "30%",
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "20%",
    },
  },
  back: {
    position: "absolute",
    width: "40%",
    height: "10%",
    top: "50%",
    left: "50%",
    marginLeft: "-20%",
    marginTop: "-5%",
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    border: "none",
    letterSpacing: "1px",
    textTransform: "uppercase",
    transition: "0.4s",
    color: "white",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    [sizes.down("sm")]: {
      width: "40%",
      height: "20%",
    },
  },

  Palette: {
    height: "100vh",
  },
  PaletteColors: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    height: "90%",
  },
};

export default styles;
