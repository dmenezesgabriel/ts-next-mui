import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export function Filter() {
  return (
    <FormControl fullWidth>
      <InputLabel id="select-category-label">Category</InputLabel>
      <Select
        multiple
        labelId="select-category-label"
        id="select-category"
        label="Category"
        value={[]}
      >
        <MenuItem value={"All"}>All</MenuItem>
        <MenuItem value={"A"}>A</MenuItem>
        <MenuItem value={"B"}>B</MenuItem>
      </Select>
    </FormControl>
  );
}
