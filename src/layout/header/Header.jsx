import React from 'react'
import { Add } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import editBlog from '../../assets/images/blog 1.png'

function Header() {
    return (
        <div className="flex justify-between items-center pb-4 pt-7">
            <div className="flex items-center">
                <div className="p-[12px] bg-[#181819] mr-3 rounded-lg">
                    <img width={'22px'} src={editBlog} alt="blog-edition" className="w-[22px]" />
                </div>
                <h1 className="text-2xl font-semibold">Booking</h1>
            </div>
            <IconButton sx={{
                p: 0, width: '44px', height: '40px', bgcolor: '#CD1E5F', borderRadius: '8px', '&:hover': {
                    bgcolor: '#CD1E5F', // darker on hover
                },
            }}>
                <Add sx={{ width: "20px", height: '20px' }} className="text-white" />
            </IconButton>
        </div>
    )
}

export default Header
