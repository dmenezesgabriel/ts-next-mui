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
        <Typography
          component="h1"
          variant="h5"
          sx={{ fontWeight: 500 }}
          gutterBottom
        >
          Summary
        </Typography>
      </Box>

      <DashboardFilters />
    </Box>
  );
}
