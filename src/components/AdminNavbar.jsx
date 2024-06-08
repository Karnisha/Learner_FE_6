import * as React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { FaBookOpenReader } from "react-icons/fa6";
import { FaUserGraduate, FaHome, FaChartBar } from "react-icons/fa";
import logo from '../assets/logo.png'
import '../Styles/AdminNavbar.css'
 
const drawerWidth = 240;
 
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});
 
const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});
 
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));
 
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
 
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);
 
export default function AdminNavbar() {
 
    const [activePage, setActivePage] = useState('home');
 
 
    const [showReportDropdown, setShowReportDropdown] = useState(false);
    const handlePageChange = (page) => {
        setActivePage(page);
 
        if (page === 'reports' && showSideNav) {
            setShowReportDropdown(!showReportDropdown);
        }
        // if (showReportDropdown) {
        //     setShowReportDropdown(!showReportDropdown);
        // }
 
    };
 
 
    const theme = useTheme();
    const [showSideNav, setShowSideNav] = React.useState(false);
 
    const handleDrawerOpen = () => {
        setShowSideNav(true);
    };
 
    const handleDrawerClose = () => {
        setShowSideNav(false);
        if (showReportDropdown) {
            setShowReportDropdown(!showReportDropdown)
        }
 
 
    };
 
    return (
        // <Box sx={{ display: 'flex' }}>
        //    
        <>
            <CssBaseline />
            <AppBar position="fixed" open={showSideNav}>
                <Toolbar className='top-nav'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(showSideNav && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box noWrap component="div">
                        <img src={logo} alt='logo' />
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={showSideNav}>
                <DrawerHeader className='drawerheader'>
                    <IconButton onClick={handleDrawerClose} >
                        {theme.direction === 'rtl' ? <ChevronRightIcon className='iconDrawer' /> : <ChevronLeftIcon className='iconDrawer' />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <div className={`side-nav ${showSideNav ? 'open' : ''}`}>
                    <ul>
                        <Link to="/">
                            <li className={activePage === 'home' ? 'active' : ''} onClick={() => handlePageChange('home')}>
                                <FaHome className='icon' /> {/* Icon for Home */}
                                {showSideNav && <span>Home</span>}
                            </li>
                        </Link>
                        <Link to="/admincourse">
                            <li className={activePage === 'course' ? 'active' : ''} onClick={() => handlePageChange('course')}>
 
                                <FaBookOpenReader className='icon' />
                                {showSideNav && <span>Course</span>}
 
                            </li>
                        </Link>
 
                        <li
                            className={activePage === 'learner' ? 'active' : ''}
                            onClick={() => handlePageChange('learner')}
                        >
                            <FaUserGraduate className='icon' /> {/* Icon for Tracking */}
                            {showSideNav && <span>Learner</span>}
                        </li>
                        <li className='reports' onClick={() => handlePageChange('reports')}>
                            <FaChartBar className='icon' />
                            {showSideNav && <span>Reports</span>}
 
                        </li>
                    </ul>
                    <ul className={`submenu ${showReportDropdown ? 'open' : ''}`}>
                        <li onClick={() => setActivePage('learnerreport')}> Learner Report</li>
                        <li onClick={() => setActivePage('coursereport')}>Course Report</li>
                        <li onClick={() => setActivePage('enroll')}>Enrollment Report</li>
                        <li onClick={() => setActivePage('quiz')}>Quiz Report</li>
                    </ul>
                </div>
                <Divider />
 
            </Drawer>
            {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Home />
            </Box> */}
        </>
        // </Box>
    );
}
 