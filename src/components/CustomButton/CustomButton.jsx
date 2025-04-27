import { Button } from '@mui/material'
import React from 'react'

function CustomButton({ variant, value, ...rest }) {
    return (
        <Button variant={variant} {...rest}>
            {value}
        </Button>
    )
}

export default CustomButton
