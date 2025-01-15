"use client";
import { ThemeProvider } from "@mui/system";
import { lightTheme } from "@/theme";

export function StyledRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}
