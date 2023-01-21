import {InputLabel, MenuItem, Select, FormControl} from '@mui/material'

function FilterItem({ field, options, value = "" }) {
  return (
    <FormControl sx={{ m: 1, minWidth: 90 }} fullWidth size="small">
      <InputLabel id={`team-label`}>{field.toUpperCase()}</InputLabel>
      <Select
        labelId="team-label"
        id="team-select"
        label="Team"
        value={value}
        autoWidth>
        {options &&
          options.map(({ value, text }) => (
            <MenuItem key={value} value={value}>
              {text}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  )
}

export default FilterItem
