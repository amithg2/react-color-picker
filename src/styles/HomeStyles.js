import sizes from "./sizeHelpers";

const styles = {
  "@global": {
    ".fade-exit": {
      opacity: "1",
    },
    ".fade-exit-active": {
      opacity: "0",
      transition: "opacity 500ms ease-out",
    },
  },
  root: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overFlow: "scroll",
    minHeight: "120vh",
    backgroundColor: "#5A5AAA",
    [sizes.down("lg")]: {
      minHeight: "150vh",
    },
    [sizes.down("sm")]: {
      minHeight: "300vh",
    },
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("md")]: {
      width: "70%",
    },
    [sizes.down("sm")]: {
      width: "40%",
    },
    [sizes.down("xs")]: {
      width: "60%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      color: "white",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "5%",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2,50%)",
    },
    [sizes.down("sm")]: {
      gridTemplateColumns: "repeat(1,100%)",
    },
  },
};

export default styles;
