import { SideBar } from "@/components/side-bar";
import { Header } from "@/components/header";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Stack direction="row">
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
    </Stack>
  );
}
