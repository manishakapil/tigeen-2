import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import IconTab from "./IconTab";
import "./App.css"
import DrawerHeaderTop from "./DrawerHeaderTop";
import DrawerHeaderBottom from "./DrawerHeaderBottom";


const Footer = () => (
    <div className="footer">
        <Box>
            <AppBar className="bg-grey"  position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        // aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <DrawerHeaderTop/>
                    </IconButton>

                    <Typography component="div"  sx={{flexGrow: 2 }}>
                       <IconTab />
                    </Typography>
                    
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        // aria-label="menu"
                    >
                        <DrawerHeaderBottom/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
);

export default Footer;