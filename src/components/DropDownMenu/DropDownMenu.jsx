import { FormControl, MenuItem, Select } from "@mui/material";

const DropdownMenu = ({ options, value, onChange, disabled, placeholder }) => {
  return (
    <FormControl size="small">
      <label style={labelStyles}>{`Select ${placeholder}`}</label>
      <Select
        fullWidth
        style={selectStyles}
        value={value}
        onChange={onChange}
        disabled={disabled}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        renderValue={(selected) => (
          <span>{selected ? selected : placeholder}</span>
        )}
      >
        <MenuItem value="">{placeholder}</MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

// Styles Property

const labelStyles = {
  color: "#2B00FF",
  fontWeight: 500,
  fontSize: 20,
  letterSpacing: 0.7,
  marginBottom: 10,
};

const selectStyles = {
  width: 275,
  outline: "unset",
  borderRadius: 7,
};

export default DropdownMenu;
