"use client";
import { Box, Tabs, Tab, Chip, Stack, Card, CardContent } from "@mui/material";
import { MonthlySpencesChart } from "./monthly-spences-chart";
import { useState } from "react";

const filters = ["All", "Marketing", "Sales", "Engineering", "HR", "Finance"];

export function MonthlyChartTabs() {
  const [value, setValue] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["All"]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleFilterClick = (filter: string) => {
    setSelectedFilters((prev) => {
      if (filter === "All") return ["All"];
      if (prev.includes(filter)) {
        const newFilters = prev.filter((f) => f !== filter);
        return newFilters.length === 0 ? ["All"] : newFilters;
      } else {
        const newFilters = prev.filter((f) => f !== "All").concat(filter);
        return newFilters;
      }
    });
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="monthly chart tabs"
            >
              <Tab label="Monthly Evolution" />
              <Tab label="Accumulated View" />
            </Tabs>
          </Box>
          <Stack direction="row" spacing={1} sx={{ mb: 2 }} flexWrap="wrap">
            {filters.map((filter) => (
              <Chip
                key={filter}
                label={filter}
                onClick={() => handleFilterClick(filter)}
                color={selectedFilters.includes(filter) ? "primary" : "default"}
                sx={{ mb: 1 }}
              />
            ))}
          </Stack>
          <Box>
            <MonthlySpencesChart filters={selectedFilters} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
