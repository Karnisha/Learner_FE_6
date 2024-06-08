import React, { useState, useRef } from "react";
import "../../Styles/Learner/CourseNavbar.css";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import logo from "..//../assets/logo.png";
import LearnerCourse from "../LearnerComponent/LearnerCourse";
import { useSelector } from "react-redux";
//import { fetchCourses } from '../../middleware/CourseApi';
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from "react-router-dom";

const learnerId = sessionStorage.getItem("UserSessionID");

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SearchBar = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgba(255, 255, 255, 0.15)",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },
  marginLeft: "200%",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  padding: theme.spacing(1, 1, 1, 0),
  // vertical padding + font size from searchIcon
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create("width"),
  width: "100%",

  [theme.breakpoints.up("md")]: {
    width: "50ch",
  },
}));

export default function MiniDrawer() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [search, setSearch] = useState(""); // State for search query
  // const [courses, setCourses] = useState([]);
  const courses = useSelector((state) => state.fetchcourse.courses);
  const searchedItemRef = useRef();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  // const handleSearchFocus=()=>{
  //   searchedItemRef.current.display="block"
  // }

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearch(query);
    if (query.length > 0) {
      const filteredSuggestions = courses.filter((course) =>
        course.title.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearch(suggestion.title);
    setSuggestions([]);
  };

  return (
    <Box sx={{ display: "flex" }} className="bar">
      <CssBaseline />
      <AppBar position="fixed" open={open} className="bar">
        <div style={{ backgroundColor: "#27235C" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <a className="navbar-brand" href="Relevantz">
              <img src={logo} alt="Relevantz Logo" className="navbar-imaged" />
            </a>
            <div className="navbar-name">
              <h5>Learning Experience Platform</h5>
            </div>
            {/* <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Learning Experience Platform
          </Typography> */}
            <Stack direction="row" alignItems="center" spacing={2}>
              <SearchBar className="search-bar">
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <SearchInput
                  placeholder="Search..."
                  value={search}
                  onChange={handleSearchChange}
                  onFocus={handleFocus} // Add onFocus event handler
                  onBlur={handleBlur} // Add onBlur event handler
                />
                {isFocused==true && suggestions && suggestions.length > 0 ? (
                  <ul className="suggestions-dropdown">
                    {suggestions.map((suggestion) => (
                      <li
                        key={suggestion.courseId}
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion.title}
                      </li>
                    ))}
                  </ul>
                ) : 
                  <>{isFocused==true && (<ul className="suggestions-dropdown">
                  <li>No results found</li>
                </ul>)}</>
                  
                }
              </SearchBar>
              {/* <SearchBar className="ms-5">
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <SearchInput
                  placeholder="Search..."
                  value={search}
                  onChange={handleSearchChange}
                />
                {suggestions && suggestions.length > 0 ? (
                  <ul className="suggestions-dropdown">
                    {suggestions.map((suggestions) => (
                      <li
                        key={suggestions.courseId}
                        onClick={() => handleSuggestionClick(suggestions)}
                      >
                        {suggestions.title}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="suggestions-dropdown">
                    <li>No result found</li>
                  </ul>
                )}
              </SearchBar> */}

              <Avatar
                sx={{ bgcolor: "light pink", cursor: "pointer" }}
                className="course-avatar"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onMouseEnter={handleMenuOpen}
                style={{ marginLeft: 500 }}
              >
                PM
              </Avatar>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Close</MenuItem>
              </Menu>
            </Stack>
          </Toolbar>
        </div>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <Link to="/LearnerDashboard">
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <HomeOutlinedIcon />
                </ListItemIcon>
              </Link>
              <ListItemText primary="Courses" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <Link to="/LearnerPage">
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <MenuBookIcon />
                </ListItemIcon>
              </Link>
              <ListItemText primary="Courses" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <Link to="/LearnerenrolledCourse">
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <SchoolOutlinedIcon />
                </ListItemIcon>
              </Link>
              <ListItemText
                primary="My Course"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <Link to="/LearnerenrolledCourse">
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <EmojiEventsOutlinedIcon />
                </ListItemIcon>
              </Link>
              <ListItemText primary="Scores" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>

      <LearnerCourse search={search} />
    </Box>
  );
}
