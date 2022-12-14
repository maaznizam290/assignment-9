import { TextField } from "@mui/material";

function Input(props) {
  const { label, onChange, value, type, disabled, required } = props;
  return (
    <TextField
      fullWidth={true}
      variant="standard"
      disabled={disabled}
      label={label}
      value={value}
      type={type}
      required={required}
      onChange={onChange}
    />
  );
}
export default Input;