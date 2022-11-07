import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Dropdown=styled((props)=>{ 
    let {handleClick,handleClose} = props;
  return (
    <>
      <Button
        id="demo-customized-button"
        aria-haspopup="true"
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Options
      </Button>
      <Dropdown
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} >
          <EditIcon />
          Yes
        </MenuItem>
        <MenuItem onClick={handleClose} >
          <FileCopyIcon />
          No
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Hello
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          More
        </MenuItem>
      </Dropdown>
    </>
  )
    }
)
export  default Dropdown;