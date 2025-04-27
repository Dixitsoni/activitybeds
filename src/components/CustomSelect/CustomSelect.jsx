import React from 'react'
import { FormControl, Select, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function CustomSelect({ label, options = [] }) {
    return (
        <FormControl
            variant="outlined"
            size="small"
            className="bg-[#181819] rounded-md border border-[#444444] text-gray-300"
        >
            <Select
                displayEmpty
                IconComponent={KeyboardArrowDownIcon}
                className="text-gray-300 border-[#444444]"
                inputProps={{
                    classes: {
                        icon: 'text-gray-300',
                    },
                }}
                sx={{
                    backgroundColor: '#181819',
                    color: '#9F9F9F',
                    fontSize: '12px',
                    paddingY: '10px',
                    border: '1px solid #444444',
                    width: '165px',
                    height: '40px',
                    borderRadius: '8px',
                    '.MuiSelect-icon': {
                        color: '#444444', // <-- arrow color
                    },
                }}
                defaultValue=""
            >
                <MenuItem disabled value="">
                    {label}
                </MenuItem>
                {options.map((option, index) => (
                    <MenuItem key={index} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default CustomSelect
