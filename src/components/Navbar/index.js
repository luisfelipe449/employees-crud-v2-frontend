import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import './style.css'

export default function Header() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h5" component="div">
            Employees CRUD
          </Typography>
          <p>Made by Luis</p>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
