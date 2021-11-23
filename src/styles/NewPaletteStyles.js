import { styled } from "@mui/material/styles";
import sizes from "./sizeHelpers";

import {DRAWERWIDTH} from './constants'
const drawerWidth = DRAWERWIDTH;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    palleteButtons: {},
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
   
      marginLeft: 0,
    }),
  })
);

const mainButtons = {
  h4: {
    transform: "scale(0.85)",
    zIndex: "1",
  },
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export {DrawerHeader}
export {mainButtons}
export {Main}
