import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 240;

interface SidebarProps {
  open: boolean;
}

const sidebarItems = [
  { text: "Dashboard", icon: <DashboardIcon /> },
  { text: "Analytics", icon: <BarChartIcon /> },
  { text: "Finances", icon: <AttachMoneyIcon /> },
  { text: "Settings", icon: <SettingsIcon /> },
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
