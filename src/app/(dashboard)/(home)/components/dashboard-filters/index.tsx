import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export function DashboardFilters() {
  const years = ["2023", "2024", "2025"];
  const categories = ["Furniture"];
  const departments = ["Marketing", "Sales", "HR", "Engineering", "Finance"];

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      sx={{
        alignItems: "center",
      }}
    >
      <Box component="span">
        <Typography sx={{ fontWeight: "light" }}>Filters: </Typography>
      </Box>

      <FormControl size="small" sx={{ width: { xs: "100%", md: "320px" } }}>
        <InputLabel id="year-select-label">Year</InputLabel>
        <Select
          multiple
          labelId="year-select-label"
          id="year-select"
          value={[]}
          label="Year"
          sx={{ width: { xs: "100%", md: "320px" } }}
        >
          <MenuItem value={"All"}>All</MenuItem>
          {years &&
            years.map((year) => {
              return (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ width: { xs: "100%", md: "320px" } }}>
        <InputLabel id="department-select-label">Department</InputLabel>
        <Select
          multiple
          labelId="department-select-label"
          id="department-select"
          value={[]}
          label="Department"
          sx={{ width: { xs: "100%", md: "320px" } }}
        >
          <MenuItem value={"All"}>All</MenuItem>
          {departments &&
            departments.map((department) => {
              return (
                <MenuItem key={department} value={department}>
                  {department}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ width: { xs: "100%", md: "320px" } }}>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          multiple
          labelId="category-select-label"
          id="category-select"
          value={[]}
          label="Category"
          sx={{ width: { xs: "100%", md: "320px" } }}
        >
          <MenuItem value={"All"}>All</MenuItem>
          {categories &&
            categories.map((category) => {
              return (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>

      <Button
        startIcon={<SearchOutlinedIcon />}
        variant="outlined"
        sx={{
          width: { xs: "100%", md: "150px" },
        }}
      >
        Apply
      </Button>
      <Button
        startIcon={<DeleteOutlinedIcon />}
        variant="outlined"
        sx={{
          width: { xs: "100%", md: "150px" },
        }}
      >
        Clear
      </Button>
    </Stack>
  );
}
