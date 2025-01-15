import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const drawerWidth = 240;

interface SidebarProps {
  open: boolean;
}

const sidebarItems = [
  { text: "Dashboard", icon: <SpaceDashboardOutlinedIcon /> },
  { text: "Analytics", icon: <BarChartOutlinedIcon /> },
  { text: "Finances", icon: <AttachMoneyOutlinedIcon /> },
  { text: "Settings", icon: <SettingsOutlinedIcon /> },
];

export function SideBar({ open }: SidebarProps) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? drawerWidth : 56,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: open ? drawerWidth : 56,
          boxSizing: "border-box",
          transition: "width 0.2s",
          overflowX: "hidden",
        },
      }}
    >
      <Toolbar />
      <List>
        {sidebarItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
