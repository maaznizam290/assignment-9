import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

function Dropdown(props) {
    const { label, onChange, value, name, error, fullWidth, id, labelId, datasource, required } = props
    return (
        <>
            <FormControl fullWidth required={required}>
                <InputLabel id={labelId}>{label}</InputLabel>
                <Select
                    labelId={labelId}
                    id={id}
                    label={label}
                    onChange={onChange}
                    name={name}
                >
                   { datasource && datasource.length > 0
          ? datasource.map((x) => (<MenuItem value={x.id}>{x.displayname}</MenuItem>))
          : null}
                </Select>
            </FormControl>
        </>
    )
}

export default Dropdown;