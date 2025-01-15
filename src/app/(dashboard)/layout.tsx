import { SideBar } from "@/components/side-bar";
import { TopNav } from "@/components/top-nav";
import { Box } from "@mui/material";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <TopNav />
      <SideBar open={false} />
      {children}
    </Box>
  );
}
