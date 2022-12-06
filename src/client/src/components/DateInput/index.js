import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { TextField } from "@mui/material"

function DateInput({value, label, handleChange}) {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        size="small"
        inputFormat="DD/MM/YYYY"
        label={label}
        value={value}
        onChange={moment => handleChange(moment.valueOf())}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}

export default DateInput
