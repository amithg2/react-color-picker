import sizes from "./sizeHelpers";

const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.3rem",
    paddingBottom: "1.5rem",
    position: "relative",

    cursor: "pointer",
    [sizes.down("md")]: {
      transform: "scaley(1.1)",
      "& svg": {
        opacity: 1,
      },
    },
    "&:hover svg": {
      opacity: 1,
    },
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-4px",
  },
  delete: {},
  deleteIcon: {
    color: "white",
    backgroundColor: "red",
    padding: "0.3rem",
    position: "absolute",
    top: "0px",
    right: "0px",
    zIndex: "10",
    opacity: "0",
  },
};

export default styles;
