import React from 'react'
import { Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const statusColors = {
    Confirmed: "#0FAA40",
    Cancelled: "#A80606",
    Vouchered: "#34BED9",
    Travelled: "#0B2958",
};

const statusBorder = {
    Confirmed: "#57FF8C",
    Cancelled: "#FF4242",
    Vouchered: "#B3F2FF",
    Travelled: "#2E79FA",
};

function CustomTable({ row, column }) {
    return (
        < div className="" >

            <div className="bg-[#181819] rounded-lg border border-1 border-[#444444]">
                <TableContainer
                    component={Paper}
                    sx={{
                        backgroundColor: "#181819",
                        borderRadius: "8px",
                    }}
                >
                    <Table sx={{
                        minWidth: "1300px",
                        overflowX: "auto",
                    }}>
                        <TableHead>
                            <TableRow>
                                {column.map((header) => (
                                    <TableCell
                                        key={header.key}
                                        sx={{
                                            backgroundColor: "#28282A",
                                            color: "#B9B9B9",
                                            fontSize: 12,
                                            fontWeight: 500,
                                            borderBottom: "1px solid #444444",
                                            whiteSpace: "nowrap",
                                            width: header.width,
                                            // textAlign: header.textAlign
                                        }}
                                    >
                                        {header.key}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {row.map((b, i) => (
                                <TableRow
                                    key={i}
                                    // hover
                                    sx={{
                                        transition: 'all 0.3s ease', // Smooth transition
                                        '&:hover': {
                                            backgroundColor: '#28282A',
                                            borderBottom: '1px solid #444444',
                                            cursor: 'pointer',
                                        },
                                    }}
                                >
                                    <TableCell sx={{ borderBottom: "1px solid #444444", textAlign: 'center' }}>
                                        <Chip
                                            label={b.leadPax}
                                            size="small"
                                            sx={{
                                                backgroundColor: b.leadPax === "M" ? "#14356A" : "#4A146A",
                                                border: `1px solid ${b.leadPax == "M" ? "#427EF6" : "#B442F6"}`,
                                                color: "#FFFFFF",
                                                fontWeight: "bold",
                                                fontSize: "0.75rem",
                                                width: "35px",
                                                height: "26px",
                                                borderRadius: "16px",
                                            }}
                                        />
                                    </TableCell>

                                    <TableCell sx={{ borderBottom: "1px solid #444444", width: '50px' }}>
                                        <div className="text-white font-semibold text-xs">{b.agent}</div>
                                        <div className="text-gray-400 text-[10px]">
                                            Acc. Manager - {b.manager}
                                        </div>
                                    </TableCell>

                                    {b.source.includes('image') ? <TableCell sx={{ color: "#FFFFFF", fontSize: "12px", fontWeight: 700, borderBottom: "1px solid #444444", width: '50px' }}>
                                        <div className="flex justify-center items-center"> <img src={b.source} alt="notapiIMage" /></div>
                                    </TableCell> : <TableCell sx={{ color: "#FFFFFF", fontSize: "12px", fontWeight: 700, borderBottom: "1px solid #444444", textAlign: 'center', width: '50px' }}>
                                        {b.source}
                                    </TableCell>
                                    }
                                    <TableCell
                                        sx={{
                                            color: "#FF5594",
                                            fontSize: "12px",
                                            fontWeight: 500,
                                            borderBottom: "1px solid #444444"
                                        }}
                                    >
                                        {b.id}
                                    </TableCell>

                                    <TableCell sx={{ color: "#9F9F9F", fontSize: "12px", borderBottom: "1px solid #444444" }}>
                                        {b.date}
                                    </TableCell>

                                    <TableCell sx={{ color: "#9F9F9F", fontSize: "12px", borderBottom: "1px solid #444444" }}>
                                        {b.travelDate}
                                    </TableCell>

                                    <TableCell sx={{ borderBottom: "1px solid #444444" }}>
                                        <div className="text-[#B9B9B9] text-xs font-medium">{b.leadPaxName}</div>
                                        <div className="text-[#B9B9B9] text-[10px]">{b.paxDetails}</div>
                                    </TableCell>

                                    <TableCell sx={{ borderBottom: "1px solid #444444", textAlign: 'center', width: '50px' }}>
                                        {b.type === "Boat" ? (
                                            <div className="flex justify-center">
                                                <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.4531 1.90312C10.3656 1.99609 10.2891 2.1164 10.2891 2.17109C10.2891 2.23124 10.3711 2.41171 10.475 2.57577C11.4156 4.10155 11.7383 4.69765 12.2031 5.7914C13.2914 8.35077 13.7891 10.8226 13.7891 13.6719C13.7891 15.9141 13.4938 17.8445 12.8211 19.9664C12.5367 20.8797 12.5367 21.0055 12.832 21.1476C13.0453 21.2516 12.9906 21.268 14.0352 20.7922C15.2602 20.2344 16.7586 19.8023 18.2734 19.5672C18.9461 19.4633 19.2906 19.4469 20.543 19.4469C22.1289 19.4469 22.8016 19.518 24.1414 19.8242C24.7867 19.9719 24.9289 19.9555 25.082 19.7203C25.1641 19.6 25.1641 19.5234 25.1094 19.0476C24.7813 16.2531 23.8625 13.568 22.3914 11.1016C19.9031 6.93984 16.0641 3.68593 11.7438 2.07812C10.732 1.70077 10.6664 1.6953 10.4531 1.90312Z" fill="#00C7BE" />
                                                    <path d="M9.93905 4.39142C9.8242 4.50626 9.81327 4.58282 9.77499 5.3047C9.52889 10.4453 7.77342 15.3453 4.71639 19.4414C4.42108 19.8297 4.16952 20.1961 4.14764 20.2508C4.10389 20.3711 4.19139 20.6117 4.31717 20.7047C4.44842 20.8086 4.6453 20.7977 5.01717 20.6719C5.72264 20.4258 6.38983 20.3274 7.30858 20.3219C8.48983 20.3219 9.20624 20.4586 10.3 20.8961C11.0711 21.2078 11.1312 21.1695 11.4648 20.1524C12.1594 18.0031 12.4711 15.9633 12.4765 13.557C12.4765 11.1508 12.1539 8.96329 11.4594 6.72657C11.1476 5.72579 10.6281 4.44064 10.4914 4.34767C10.3219 4.22736 10.0867 4.24376 9.93905 4.39142Z" fill="#00C7BE" />
                                                    <path d="M13.7891 22.2086L3.04297 22.6406L2.88984 22.8047C2.80781 22.8977 2.74219 23.007 2.74219 23.0508C2.74219 23.2203 4.21875 26.0805 4.34453 26.168C4.46484 26.2445 5.41094 26.25 13.3297 26.2391L22.1836 26.2227L22.6211 26.0969C24.3109 25.6211 25.5469 24.4398 26.0938 22.7828C26.2633 22.2688 26.2633 22.0008 26.0992 21.8695C25.9898 21.7766 25.8859 21.7656 25.2516 21.7711C24.8578 21.7766 19.7008 21.9734 13.7891 22.2086Z" fill="#00C7BE" />
                                                </svg>
                                            </div>
                                        ) : (
                                            <div className="flex justify-center">
                                                <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_859_3071)">
                                                        <path d="M13.8887 4.42967C13.7598 4.44139 13.3262 4.48241 12.9219 4.51756C10.0742 4.76952 7.53125 5.58397 6.48242 6.58592C5.83203 7.21288 5.1875 8.29686 4.50781 9.90233L4.20312 10.6348L2.59766 10.664C1.17969 10.6875 0.980469 10.7051 0.839844 10.7988C0.675781 10.916 0.5 11.2265 0.5 11.414C0.5 11.6601 0.980469 13.8047 1.0625 13.9336C1.23828 14.2031 1.48438 14.2969 2.03516 14.2969H2.54492L2.24023 14.748C1.89453 15.2578 1.60742 15.9023 1.45508 16.5058C1.30273 17.1094 1.32031 18.4512 1.49023 19.0723C1.71875 19.916 2.22266 20.8242 2.75 21.3223L2.96094 21.5273V23.1094C2.96094 24.8789 2.99023 25.0078 3.36523 25.3301C3.68164 25.5937 3.86328 25.6172 5.60352 25.5937L7.2207 25.5762L7.43164 25.418C7.85938 25.084 7.90625 24.9609 7.94141 24.082L7.9707 23.291H15.5H23.0293L23.0586 24.082C23.0938 24.9609 23.1406 25.084 23.5684 25.418L23.7793 25.5762L25.3965 25.5937C27.1367 25.6172 27.3184 25.5937 27.6348 25.3301C28.0098 25.0137 28.0391 24.873 28.0391 23.1504V21.6094L28.3203 21.2988C28.9004 20.666 29.2754 19.9687 29.5098 19.0957C29.6973 18.4101 29.6973 17.1211 29.5156 16.4473C29.3516 15.8555 29.0059 15.123 28.6602 14.6601L28.3906 14.2969H28.9355C29.5156 14.2969 29.7559 14.209 29.9375 13.9336C30.0254 13.8047 30.5 11.666 30.5 11.414C30.5 11.2265 30.3301 10.916 30.1602 10.7988C30.0195 10.7051 29.8203 10.6875 28.3965 10.664L26.7969 10.6348L26.4922 9.90233C25.8242 8.28514 25.2734 7.36522 24.5586 6.64452C24.1484 6.24022 23.9902 6.12889 23.4102 5.84178C22.0977 5.19725 20.5332 4.79295 18.3711 4.53514C17.627 4.45311 14.4688 4.37108 13.8887 4.42967ZM18.1953 6.8203C20.1406 7.06053 21.5117 7.42381 22.502 7.95702C23.041 8.24998 23.3691 8.66014 23.8496 9.63866C24.1953 10.3359 24.7578 11.707 24.7578 11.8359C24.7578 11.8711 21.3477 11.8945 15.5 11.8945C8.92578 11.8945 6.24219 11.8769 6.24219 11.8301C6.24219 11.7949 6.35938 11.4726 6.5 11.1152C7.0625 9.67967 7.63672 8.61327 8.03516 8.26756C8.88477 7.51756 11.1582 6.92577 14.0059 6.71483C14.6738 6.66209 17.5039 6.73827 18.1953 6.8203ZM7.39062 15.7676C9.17773 16.0957 9.86914 18.293 8.58594 19.5703C7.71289 20.4492 6.29492 20.4492 5.42188 19.5703C4.16211 18.3164 4.77734 16.1719 6.50586 15.791C6.95117 15.6914 6.97461 15.6914 7.39062 15.7676ZM24.8516 15.8848C26.0469 16.3301 26.6152 17.7656 26.0645 18.9316C25.502 20.1269 24.1074 20.5723 22.9121 19.9394C22.625 19.7871 22.1738 19.3183 22.0156 19.0078C21.5879 18.1523 21.7578 17.0683 22.4316 16.3945C23.0703 15.7617 23.9902 15.5683 24.8516 15.8848Z" fill="#FFCC00" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_859_3071">
                                                            <rect width="30" height="30" fill="white" transform="translate(0.5)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>

                                        )}
                                    </TableCell>

                                    <TableCell sx={{ color: "white", borderBottom: '1px solid #444444', textAlign: 'center' }}>
                                        <Chip
                                            label={
                                                <div className="flex items-center text-[#FFFFFF]">
                                                    <span className="text-xs">{b.status}</span>
                                                    {(b.status == 'Confirmed' || b.status == 'Vouchered') && (<ExpandMoreOutlinedIcon sx={{ fontSize: '15px', width: '20px' }} />)}
                                                </div>
                                            }
                                            size="small"
                                            sx={{
                                                bgcolor: statusColors[b.status], // background from your status color
                                                border: `1px solid ${statusBorder[b.status]}`,
                                                borderRadius: "16px",
                                                '& .MuiChip-label': {
                                                    fontWeight: 400
                                                }
                                            }}
                                        />
                                    </TableCell>

                                    <TableCell sx={{ color: "#FFFFFF", fontSize: "12px", borderBottom: "1px solid #444444", fontSize: '12px', fontWeight: 500, color: '#9F9F9F' }}>
                                        {b.city}
                                    </TableCell>

                                    <TableCell sx={{ borderBottom: "1px solid #444444" }}>
                                        <div className="text-[#D7D7D7] text-xs font-medium">{b.product}</div>
                                        <div className="text-[#9F9F9F] text-xs font-medium">{b.productDetails}</div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>

                {/* Pagination */}


                <div className="flex justify-between items-center px-4 py-[10px]">
                    <div>
                        <Typography sx={{ color: '#B9B9B9', fontSize: '14px' }}>
                            15 out of 60 results
                        </Typography>
                    </div>
                    <div className="flex items-center space-x-3">

                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.2">
                                <path d="M12.5 15L7.5 10L12.5 5" stroke="#9F9F9F" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>

                        <button className="px-3 py-1 bg-[#CD1E5F] text-white rounded-sm">1</button>
                        <button className="px-3 py-1 rounded-sm">2</button>
                        <button className="px-3 py-1 rounded-sm">3</button>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="#9F9F9F" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CustomTable
