import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export function DashboardFilters() {
  const years = ["2023", "2024", "2025"];
  const categories = ["Furniture"];

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box component="span">
        <Typography>Filters: </Typography>
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
        variant="outlined"
        sx={{
          width: { xs: "100%", md: "150px" },
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <SearchOutlinedIcon />
        Search
      </Button>
    </Box>
  );
}
