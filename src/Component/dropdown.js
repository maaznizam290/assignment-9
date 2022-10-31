import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Dropdown=styled((props)=>{ 
    let {handleClick,handleClose} = props;
    // console.log(obj);
  return (
    <>
      <Button
        id="demo-customized-button"
        // aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        // aria-expanded={open ? 'true' : undefined}
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
        {/* <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Hello
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem> */}
      </Dropdown>
    </>
  )
    }
)
export  default Dropdown;