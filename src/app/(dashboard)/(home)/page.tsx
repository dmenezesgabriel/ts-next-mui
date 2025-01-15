import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { DashboardFilters } from "./dashboard-filters";
import { YearToDateSpentAmount } from "./year-to-date-spent-amount";
import { YearlySpencesForecastAmount } from "./yearly-spences-forecast-amount";
import { YearToDateHeadCount } from "./year-to-date-head-count";

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
          component="h2"
          variant="h6"
          sx={{ fontWeight: 500 }}
          gutterBottom
        >
          Summary
        </Typography>
      </Box>

      <DashboardFilters />

      <Box sx={{ mt: 2 }}>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <YearToDateSpentAmount />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <YearlySpencesForecastAmount />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <YearToDateHeadCount />
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}
