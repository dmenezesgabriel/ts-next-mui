"use client";

import { AppBar, Toolbar, Typography, IconButton, Avatar } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";

export function Header() {
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
        <IconButton aria-label="open drawer" edge="start" sx={{ mr: 2 }}>
          <MenuOpenIcon />
        </IconButton>
        <Typography
          component="p"
          sx={{ flexGrow: 1, fontWeight: "regular" }}
          noWrap
        >
          Analytics Dashboard
        </Typography>

        <IconButton sx={{ mr: 1 }}>
          <BedtimeOutlinedIcon />
        </IconButton>
        <IconButton>
          <Avatar alt="User Avatar" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
