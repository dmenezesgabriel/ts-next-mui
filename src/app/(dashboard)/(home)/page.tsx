import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { DashboardFilters } from "./components/dashboard-filters";
import { YearToDateSpentAmount } from "./components/year-to-date-spent-amount";
import { YearlySpencesForecastAmount } from "./components/yearly-spences-forecast-amount";
import { YearToDateHeadCount } from "./components/year-to-date-head-count";
import { MonthlyChartTabs } from "./components/monthly-chart-tabs";

export default function Home() {
  return (
    <Box
      sx={{
        p: 3,
      }}
      component="main"
    >
      <Stack direction="column" spacing={2}>
        <Box>
          <Typography
            component="h2"
            variant="h6"
            sx={{ fontWeight: 500 }}
            gutterBottom
          >
            Summary
          </Typography>
        </Box>

        <Box component="section">
          <DashboardFilters />
        </Box>

        <Box component="section">
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

        <Box component="section">
          <MonthlyChartTabs />
        </Box>

        <Box>
          <Typography
            component="h2"
            variant="h6"
            sx={{ fontWeight: 500 }}
            gutterBottom
          >
            Details
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
