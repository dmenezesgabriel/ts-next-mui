import { SideBar } from "@/components/side-bar";
import { Header } from "@/components/header";
import Box from "@mui/material/Box";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Header />
      <SideBar open={false} />
      <Box
        sx={{
          mt: 8,
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
