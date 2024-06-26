import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import DrawerItems from "./DrawerItems";
import SidebarItems from "./SidebarItems";
const Sidebar = () => {
  return (
    <Box>
      <div>
        <Typography
          variant="h4"
          component={Link}
          href="/"
          fontWeight={600}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5px",
          }}
        >
          <Box color="primary.main"> </Box>
          Next
          <Box component="span" color="primary.main">
            Auth
          </Box>
        </Typography>

        <Divider />
        <List>
          {
            DrawerItems().map((item,index)=>
            <SidebarItems key={index} index={index} item={item}></SidebarItems>
            )
          }
        </List>
      </div>
  
    </Box>
  );
};

export default Sidebar;
