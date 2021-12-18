import sizes from "./sizeHelpers";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "100",
    letterSpacing: "2px",
    [sizes.down("md")]: {
      width: "33%",
      height: "20%",
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "10%",
    },
    "&:hover svg": {
      color: "white",
      transform: "scale(1.3)",
      transition: "0.5s ease",
    },
  },
  boxContent: {
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  deleteIcon: {
    right: "0.5rem",
    bottom: "0.5rem",
    position: "absolute",
  },

  colorName: {
    margin: "0.5rem",
  },
};

export default styles;
