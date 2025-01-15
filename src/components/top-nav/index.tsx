"use client";

import { AppBar, Toolbar, Typography, IconButton, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";

export function TopNav() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "background.paper",
        color: "text.primary",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Analytics Dashboard
        </Typography>
        <IconButton sx={{ mr: 1 }} color="inherit">
          <BedtimeOutlinedIcon />
        </IconButton>
        <IconButton color="inherit">
          <Avatar alt="User Avatar" src="/placeholder.svg" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
