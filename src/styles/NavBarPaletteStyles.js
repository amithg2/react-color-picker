import sizes from "./sizeHelpers";

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    height: "6vh",
    "& p ": {
      marginRight: " 4px",
    },
    [sizes.down("md")]: {
      position: "sticky",
      top: "0px",
      zIndex: "5",
      backgroundColor: "white",
    },
    [sizes.down("sm")]: {
      position: "sticky",
      display: "flex",
    

    },
  },
  selectLayout: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
  logo: {
    backgroundColor: "#d6d8db",
    height: "100%",
    padding: "15px",
    alignItems: "center",
    display: "flex",
    fontSize: "24px",
    marginRight: "15px",
    textDecoration: "none",
    color: "black",
    [sizes.down("md")]: {
      height: "40%",
    },
  
  },
  NavSlider: {
    display: "flex",
    alignItems: "center",
    "& .rc-slider-handle": {
      backgroundColor: "green",
      outline: "none",
      border: "none",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginTop: "-3px",
      cursor: "pointer",

      "&:active": { border: "1px solid #236d07" },
      "&:hover": { border: "1px solid #236d07" },
    },
    "& .rc-slider": {
      width: "340px",
      margin: "0 10px",
      display: "inline-block",
      [sizes.down("md")]: {
        width: "20vw",
      },
    },
    "& .rc-slider-rail": {
      height: "8px",
      backgroundColor: "#d6d8db",
    },
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
  },
};

export default styles;
