import { InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from '@mui/material/Select';



function SelectButton(props) {
    const {required,value,label,onChange,datasource,display,valField,} = props;
  return (
    <>
    <InputLabel id="select-label">{label}</InputLabel>
    <Select variant='standard'
    fullWidth={true}
    value= {value}
    required = {required}
    onChange = {onChange}
    id= 'select'
    label = {label}
    labelId = 'select-label'
    >
      {datasource && datasource.length>0 ? datasource.map((x)=><MenuItem value={x[valField ? valField:'id']} >
        {x[display ? display: 'fullName']}
        </MenuItem>):null}
    </Select>
    </>
  )
}

export  default SelectButton;