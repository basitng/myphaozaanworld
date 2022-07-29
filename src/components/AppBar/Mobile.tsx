import React, { useId } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Menu } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material";
type Anchor = "top" | "left" | "bottom" | "right";

const id = useId();
const links = [
  { name: "Home", path: "/", id },
  { name: "About Us", path: "/about", id },
  { name: "News", path: "/news", id },
  { name: "Gallery", path: "/gallery", id },
  // { name: "Enroll", path: "/register", id },
];
export default function MobileAppBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {links.map((link) => (
          <ListItem key={link.id} disablePadding>
            <ListItemButton>
              <ListItemText primary={link.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <AppBar variant="elevation" elevation={1} color={"inherit"}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img src="/media/Logo.svg" className="nav--logo" />

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={toggleDrawer("left", true)}>
              <Menu />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <React.Fragment>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
