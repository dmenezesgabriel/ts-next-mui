import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DashboardFilters } from "./dashboard-filters";

export default function Home() {
  return (
    <Box
      sx={{
        p: 3,
      }}
      component="main"
    >
      <Box component="section">
        <Typography variant="h4" gutterBottom>
          Financial Summary
        </Typography>
      </Box>

      <DashboardFilters />
    </Box>
  );
}
