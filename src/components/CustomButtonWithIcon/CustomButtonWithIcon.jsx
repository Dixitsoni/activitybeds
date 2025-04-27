import { IconButton } from '@mui/material'
import React from 'react'

function CustomButtonWithIcon({ children, color, ...rest }) {
    return (
        <IconButton color={color} {...rest}>
            {children}
        </IconButton>
    )
}

export default CustomButtonWithIcon
