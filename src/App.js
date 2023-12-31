import {
  AccountBox,
  DescriptionOutlined,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  StorefrontOutlined,
} from "@mui/icons-material";
import {
  Box,
  Stack,
  ThemeProvider,
  createTheme,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [drawer, setDrawer] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={`background.default`} color={`text.primary`}>
        <Navbar drawer={drawer} setDrawer={setDrawer} />
        <Stack direction="row" spacing={2} justifyContent={"space-between"}>
          <SideBar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
      </Box>
      <SwipeableDrawer open={drawer} onClose={(e) => setDrawer(false)}>
        <List>
          {/* Item 1 */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>
          {/* Item 2 */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItemButton>
          </ListItem>
          {/* Item 3 */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <StorefrontOutlined />
              </ListItemIcon>
              <ListItemText primary="Shop" />
            </ListItemButton>
          </ListItem>
          {/* Item 4*/}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <DescriptionOutlined />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          {/* Item 5 */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          {/* Item 6 */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          {/* Item 7  */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          {/* Dark mode Button */}
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </ThemeProvider>
  );
}

export default App;
