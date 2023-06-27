import { Mail, Notifications, Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";

const Navbar = ({ drawer, setDrawer }) => {
  const [open, setOpen] = useState(false);
  const CustomToolBar = styled(Toolbar)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  return (
    <AppBar position="sticky">
      <CustomToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Mohsen
        </Typography>
        <MenuIcon
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={(e) => setDrawer(!drawer)}
        />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)}
            sx={{ width: 30, height: 30 }}
            src="https://img.freepik.com/free-photo/portrait-beautiful-mature-blonde-bearded-guy-with-trendy-hairdo-casual-grey-shirt-smiling_176420-15741.jpg?size=626&ext=jpg&ga=GA1.2.2008094614.1687630373&semt=sph"
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://img.freepik.com/free-photo/portrait-beautiful-mature-blonde-bearded-guy-with-trendy-hairdo-casual-grey-shirt-smiling_176420-15741.jpg?size=626&ext=jpg&ga=GA1.2.2008094614.1687630373&semt=sph"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </CustomToolBar>
      <Menu
        id="menu"
        aria-labelledby="menu"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Setting</MenuItem>
        <MenuItem>Log out </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
