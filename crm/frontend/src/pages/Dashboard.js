import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Audience from './Audience';
import Campaigns from './Campaigns';
import CampaignDetail from './CampaignDetail';
import { AppBar, Toolbar, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, Typography, Box, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import CampaignIcon from '@mui/icons-material/Campaign';

const drawerWidth = 240;

const Dashboard = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        CRM Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    <ListItem button component={Link} to="/dashboard/audience">
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Audience" />
                    </ListItem>
                    <ListItem button component={Link} to="/dashboard/campaigns">
                        <ListItemIcon>
                            <CampaignIcon />
                        </ListItemIcon>
                        <ListItemText primary="Campaigns" />
                    </ListItem>
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Routes>
                    <Route path="audience" element={<Audience />} />
                    <Route path="campaigns" element={<Campaigns />} />
                    <Route path="campaigns/:id" element={<CampaignDetail />} />
                </Routes>
                <Outlet />
            </Box>
        </Box>
    );
};

export default Dashboard;
