import React, { useState } from "react";
import { Button, Chip, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Divider, Typography } from "@mui/material";
import { FilterListIcon, Add, VerifiedUser, VerifiedUserTwoTone } from "@mui/icons-material";
import { bookings } from "./utils";

import { DirectionsCar, Sailing, ExpandLess, ExpandMore, People, Book, LocalOffer, Store, Settings, Help, ExitToApp } from "@mui/icons-material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import leftChevrolet from './assets/images/fi_chevrons-left.png'
import editBlog from './assets/images/blog 1.png'
import filterIcon from './assets/images/filter 1.png'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import userImage from './assets/images/fi_user.png'
import carImage from './assets/images/car.png'
import sailingBoatImage from './assets/images/sailing-boat_1.png'
import blogMenu from './assets/images/blog_(1).png'

// const bookings = [];
import { FormControl, Select, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import chevronLeft from './assets/images/chevron-left.png'
import chevronRight from './assets/images/chevron-right.png'

import { styled } from '@mui/material/styles';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import logo from './assets/images/activitybed.3a214645e1b5c84c0bdf 1.png'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import UserWithCheck from './assets/images/fi_user-check.png'
import supplierIcon from './assets/images/fi_box.png'
import dividerImage from './assets/images/Divider.png'
import dividerImage1 from './assets/images/Divider_1.png'
import settingIcon from './assets/images/setting-2.png'
import helpIcon from './assets/images/fi_help-circle.png'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: '#fff',
  fontSize: '14px',
  borderBottom: '1px solid #333',
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:hover': {
    backgroundColor: '#2A2A2D',
  },
}));

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

export default function App() {

  const [openUserManagement, setOpenUserManagement] = useState(false);
  const [openProductManagement, setOpenProductManagement] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#28282A] text-white">
      {/* Sidebar */}
      <aside className="w-64 flex flex-col"> 
        {/* <div className="flex items-center justify-center">
          <div>
            <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.21431 0.200954C5.55806 0.817026 2.65181 2.98667 1.12502 6.22774C-0.120516 8.87953 -0.294624 11.3572 0.56252 14.0626C1.79466 17.9197 5.16966 20.7724 9.26788 21.4286C10.2322 21.5894 11.9732 21.5626 12.134 21.3885C12.2277 21.2947 12.0536 19.3661 11.9331 19.1786C11.8795 19.0849 11.25 18.9644 10.5134 18.884C8.4777 18.6697 7.23217 18.2144 5.82591 17.1563C4.08484 15.8438 2.81252 13.1518 2.81252 10.7813C2.81252 8.26346 4.36609 5.49113 6.6027 4.01792C8.95985 2.47774 12.4018 2.38399 15.067 3.79024C16.2322 4.40631 17.5313 5.75899 18.134 6.97774C18.9509 8.62506 19.0313 9.33489 19.1518 15.2679C19.259 20.7858 19.259 20.8661 19.8884 22.1117C20.2768 22.8617 21.3349 23.8394 21.7634 23.8394C21.817 23.8394 21.8304 20.5447 21.8036 16.5001L21.75 9.17417L21.375 7.96881C20.0224 3.54917 16.7545 0.73667 12.2813 0.133991C10.9956 -0.0267239 10.5402 -0.0267239 9.21431 0.200954Z" fill="#F5F5F5" />
              <path d="M14.3304 13.3125C14.3304 19.2991 14.3705 20.7857 14.5313 21.5759C15.2947 25.2188 18.0268 28.1652 21.7366 29.384C24.6429 30.3349 27.5357 30.0804 30.3348 28.6206C31.7143 27.8974 33.5893 26.0893 34.4196 24.6697C35.5848 22.6875 36.1607 20.0893 35.8929 18.0402C35.5312 15.2947 34.5804 13.4063 32.625 11.5447C30.4821 9.52236 26.9732 8.19646 24.5357 8.5045L23.8125 8.59825L23.8929 9.01343C23.933 9.2545 24 9.77682 24.0402 10.192L24.1339 10.942L25.2857 11.0224C27.6563 11.1965 29.2366 11.8527 30.7768 13.3125C31.8482 14.3304 32.625 15.6831 33.0268 17.2099C33.308 18.2813 33.3214 20.4777 33.0402 21.4018C32.3036 23.8393 30.1205 26.0357 27.5491 26.9465C26.3036 27.3884 24.1607 27.3482 22.7009 26.8795C20.7589 26.25 19.2455 25.1518 18.308 23.7322C17.0089 21.7768 16.875 20.8795 16.875 14.6116C16.875 10.2857 16.8482 9.72325 16.6205 9.00003C16.2857 7.90182 15.5759 6.89735 14.7054 6.26789L14.3304 6.01343V13.3125Z" fill="#F5F5F5" />
            </svg>
          </div>
          <div className="text-2xl font-bold p-6">activitybeds</div>
          <div>
            <img src={leftChevrolet} alt="left-chevrolet" />
          </div>
        </div> */}
        {/* <nav className="flex-1">
          <ul>
            {[
              "User Management",
              "Booking",
              "Agent",
              "Supplier",
              "Product",
              "Settings",
              "Help",
            ].map((item) => (
              <li
                key={item}
                className="px-6 py-3 hover:bg-gray-700 cursor-pointer text-sm font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav> */}
        <Drawer
          variant="permanent"
          className="bg-[#181819]"
          sx={{ bgcolor: '#181819' }}
          PaperProps={{
            sx: {
              backgroundColor: "#181819", // <-- this is the right way
              width: "16rem", // same as w-64
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            },
            // className: 'bg-[#181819] w-64 flex flex-col justify-between',
          }}
        >
          {/* Top Logo */}

          <div className="pt-7 px-4">
            <div className="flex items-center justify-between">
              {/* <div className="flex items-center">
                <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.21431 0.200954C5.55806 0.817026 2.65181 2.98667 1.12502 6.22774C-0.120516 8.87953 -0.294624 11.3572 0.56252 14.0626C1.79466 17.9197 5.16966 20.7724 9.26788 21.4286C10.2322 21.5894 11.9732 21.5626 12.134 21.3885C12.2277 21.2947 12.0536 19.3661 11.9331 19.1786C11.8795 19.0849 11.25 18.9644 10.5134 18.884C8.4777 18.6697 7.23217 18.2144 5.82591 17.1563C4.08484 15.8438 2.81252 13.1518 2.81252 10.7813C2.81252 8.26346 4.36609 5.49113 6.6027 4.01792C8.95985 2.47774 12.4018 2.38399 15.067 3.79024C16.2322 4.40631 17.5313 5.75899 18.134 6.97774C18.9509 8.62506 19.0313 9.33489 19.1518 15.2679C19.259 20.7858 19.259 20.8661 19.8884 22.1117C20.2768 22.8617 21.3349 23.8394 21.7634 23.8394C21.817 23.8394 21.8304 20.5447 21.8036 16.5001L21.75 9.17417L21.375 7.96881C20.0224 3.54917 16.7545 0.73667 12.2813 0.133991C10.9956 -0.0267239 10.5402 -0.0267239 9.21431 0.200954Z" fill="#F5F5F5" />
                  <path d="M14.3304 13.3125C14.3304 19.2991 14.3705 20.7857 14.5313 21.5759C15.2947 25.2188 18.0268 28.1652 21.7366 29.384C24.6429 30.3349 27.5357 30.0804 30.3348 28.6206C31.7143 27.8974 33.5893 26.0893 34.4196 24.6697C35.5848 22.6875 36.1607 20.0893 35.8929 18.0402C35.5312 15.2947 34.5804 13.4063 32.625 11.5447C30.4821 9.52236 26.9732 8.19646 24.5357 8.5045L23.8125 8.59825L23.8929 9.01343C23.933 9.2545 24 9.77682 24.0402 10.192L24.1339 10.942L25.2857 11.0224C27.6563 11.1965 29.2366 11.8527 30.7768 13.3125C31.8482 14.3304 32.625 15.6831 33.0268 17.2099C33.308 18.2813 33.3214 20.4777 33.0402 21.4018C32.3036 23.8393 30.1205 26.0357 27.5491 26.9465C26.3036 27.3884 24.1607 27.3482 22.7009 26.8795C20.7589 26.25 19.2455 25.1518 18.308 23.7322C17.0089 21.7768 16.875 20.8795 16.875 14.6116C16.875 10.2857 16.8482 9.72325 16.6205 9.00003C16.2857 7.90182 15.5759 6.89735 14.7054 6.26789L14.3304 6.01343V13.3125Z" fill="#F5F5F5" />
                </svg>
                <div className="text-2xl font-bold pl-[9px]">activitybeds</div>
              </div> */}
              <div>
                <img src={logo} alt="logoImage" />
              </div>
              <div>
                <img src={leftChevrolet} alt="left-chevrolet" />
              </div>
            </div>

            {/* Main Navigation */}
            <div className="pt-[50px]">
              <List>
                {/* User Management */}
                <ListItemButton sx={{
                  width: '210px',
                  height: '36px',
                  pb: '12px',
                  my: '8px',
                  borderRadius: '6px',
                  '&:hover': {
                    bgcolor: '#BA1654',
                    color: '#F5F5F5'
                  }
                }} onClick={() => setOpenUserManagement(!openUserManagement)}>
                  {/* <img src={userImage} alt="userImage" /> */}
                  <svg className="hover:text-[#F5F5F5]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66667C5.78261 12.5 4.93477 12.8512 4.30964 13.4763C3.68452 14.1014 3.33333 14.9493 3.33333 15.8333V17.5" stroke="#9F9F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10 9.16667C11.841 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.841 2.5 10 2.5C8.15905 2.5 6.66667 3.99238 6.66667 5.83333C6.66667 7.67428 8.15905 9.16667 10 9.16667Z" stroke="#9F9F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  <ListItemText sx={{
                    '&:hover': {
                      '& .MuiTypography-root': {
                        color: '#F5F5F5', // Change text color on hover
                      },
                    },
                  }} primary="User Management" primaryTypographyProps={{ fontSize: '14px', pl: '8px', fontWeight: 500, color: '#9F9F9F' }} />
                  {openUserManagement ? <ExpandLess sx={{ color: "#9F9F9F" }} /> : <ExpandMore sx={{ color: "#9F9F9F" }} />}
                </ListItemButton>

                <Collapse in={openUserManagement} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{
                      borderRadius: '6px',
                      '&:hover': {
                        bgcolor: '#BA1654',
                        color: '#F5F5F5',
                        borderRadius: '6px',
                      }
                    }}>
                      <ListItemText sx={{
                        '&:hover': {
                          '& .MuiTypography-root': {
                            color: '#F5F5F5', // Change text color on hover
                          },
                        },
                      }} primary="Sub User 1" primaryTypographyProps={{ fontSize: '14px', pl: '8px', fontWeight: 500, color: '#9F9F9F' }} />
                    </ListItemButton>
                    <ListItemButton sx={{
                      borderRadius: '6px',
                      '&:hover': {
                        bgcolor: '#BA1654',
                        color: '#F5F5F5',
                        borderRadius: '6px',
                      }
                    }}>
                      <ListItemText sx={{
                        '&:hover': {
                          '& .MuiTypography-root': {
                            color: '#F5F5F5', // Change text color on hover
                          },
                        },
                      }} primary="Sub User 2" primaryTypographyProps={{ fontSize: '14px', pl: '8px', fontWeight: 500, color: '#9F9F9F' }} />
                    </ListItemButton>
                  </List>
                </Collapse>

                {/* Booking */}
                <ListItemButton sx={{
                  width: '210px',
                  height: '36px',
                  bgcolor: '#BA1654',
                  pb: '12px', my: '8px', borderRadius: '6px', '&:hover': {
                    bgcolor: '#BA1654',
                    color: '#F5F5F5'
                  }
                }}>
                  {/* <div>

                  </div> */}
                  {/* <div className="group">
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200"
                      fill="none"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_859_5738)">
                        <path d="M9.54218 11.8437C10.6285 11.837 11.7384 11.4268 12.6877 10.6474L13.1642 11.2265L12.6877 10.6464L12.6935 10.6425C12.6827 10.6513 12.698 10.6385 12.7629 10.5771C12.8174 10.5254 12.892 10.4541 12.9846 10.3642C13.1696 10.1843 13.4215 9.93553 13.7238 9.63666L15.9767 7.39252C17.4768 5.88851 18.2421 5.11995 18.6516 4.69037C18.9595 4.36729 19.0307 4.2714 19.0539 4.22943L19.0676 4.19916C19.2314 3.85472 19.2769 3.54201 19.2248 3.23529L19.1965 3.10345L19.1955 3.1015C19.0699 2.61356 18.7728 2.24709 18.3664 2.04584L18.1857 1.96967H18.1848C18.0974 1.93894 17.9285 1.90542 17.7258 1.89447C17.6229 1.88893 17.532 1.89063 17.4582 1.89545L17.2932 1.91791L17.2834 1.91986L17.1252 1.96771C17.0221 2.00458 16.9232 2.05184 16.8273 2.11127L16.6857 2.20892L16.6828 2.21088L16.6027 2.28412C16.5431 2.3391 16.4638 2.41417 16.3664 2.50775C16.1718 2.69461 15.9129 2.94752 15.6105 3.24603C15.0062 3.84261 14.2338 4.61472 13.4641 5.39056C12.6943 6.16644 11.9288 6.94485 11.3381 7.55267C11.0425 7.85684 10.7921 8.11729 10.6076 8.31244C10.5152 8.41019 10.4409 8.4893 10.3869 8.54877L10.3166 8.62689C9.68889 9.47503 9.32219 10.477 9.26483 11.4599L9.258 11.6562C9.25711 11.7411 9.25706 11.7996 9.258 11.8437H9.54218ZM10.3215 11.7109C10.282 11.7156 10.1822 11.7264 10.0627 11.705C9.92503 11.6804 9.73258 11.6066 9.58417 11.4199C9.44875 11.2495 9.42003 11.0708 9.41327 10.9765C9.40173 10.8149 9.44029 10.6629 9.45331 10.6103L9.53339 10.3232C9.67056 9.8461 9.97658 9.21554 10.2756 8.79095V8.78998C10.3233 8.72155 10.3968 8.63982 10.4416 8.59076C10.5024 8.52414 10.5821 8.43951 10.676 8.34076C10.8643 8.14256 11.1204 7.87832 11.4191 7.5722C12.0171 6.9595 12.7947 6.17125 13.5715 5.39056C14.3483 4.60979 15.1256 3.83445 15.7219 3.24701C16.0196 2.95371 16.2746 2.7057 16.4621 2.52631C16.5554 2.43706 16.6357 2.36182 16.6974 2.3056C16.7277 2.27809 16.7577 2.25078 16.7853 2.22748C16.7877 2.22549 16.8626 2.15839 16.9533 2.11029V2.11127C17.184 1.98876 17.4397 1.9498 17.6447 1.94818C17.8499 1.94661 18.1106 1.98138 18.3469 2.10443L18.3459 2.10541C19.0173 2.45128 19.3559 3.22069 19.1017 3.9433L19.0422 4.08783L19.0412 4.08978L18.9621 4.22357C18.9381 4.25719 18.9197 4.2784 18.9182 4.28021C18.8935 4.31049 18.8653 4.34334 18.8371 4.37494C18.7798 4.43917 18.7033 4.52118 18.6135 4.61615C18.4325 4.80757 18.1815 5.06714 17.8859 5.36908C17.294 5.9737 16.5123 6.76056 15.7238 7.54681C14.9352 8.33323 14.1376 9.12098 13.5148 9.72748C13.2039 10.0303 12.9345 10.2901 12.7307 10.4824C12.629 10.5782 12.5402 10.6596 12.4699 10.7226C12.4177 10.7695 12.3307 10.8476 12.2541 10.8984H12.2551C11.803 11.1984 11.1767 11.491 10.6555 11.6376L10.4396 11.6913L10.4289 11.6933L10.3215 11.7109Z" stroke="#F5F5F5" stroke-width="1.5" />
                        <path d="M1.9873 18.0846C2.18813 18.1325 2.52193 18.1227 2.75781 18.0641L2.85253 18.0357L2.85742 18.0348C3.0375 17.9717 3.16221 17.9158 3.49218 17.6402L3.90038 17.2828L4.49023 16.7516L4.70312 16.5592L4.99023 16.5582L9.32226 16.5465L13.5381 16.5357L13.7812 16.4596H13.7822C14.9467 16.0984 15.7266 15.2955 16.0205 14.2008V14.1998C16.0644 14.0332 16.0787 13.973 16.0898 13.8297C16.0967 13.7404 16.1013 13.6262 16.1055 13.4605L16.1172 12.7828C16.1253 12.0824 16.1249 11.7956 16.1055 11.6441L16.1045 11.6422C16.1019 11.6393 16.0997 11.6358 16.0967 11.6324L16.1025 11.6275L16.1016 11.6266L16.0957 11.6324L16.0928 11.6295H16.0918C16.0905 11.6304 16.0877 11.6324 16.085 11.6353H16.0859L16.085 11.6363C16.0684 11.7646 16.0625 12.0094 16.0625 12.5894C16.0625 13.2701 16.058 13.5959 16.0185 13.8678L15.9668 14.1324L15.9648 14.1412L15.9072 14.3375C15.616 15.2391 14.9771 15.9222 14.0918 16.2877L13.8984 16.3609L13.7129 16.4088C13.5102 16.4461 13.2439 16.4551 12.8086 16.4635C12.4892 16.4696 12.0458 16.4746 11.4238 16.4791L8.96874 16.4918C6.91878 16.5016 5.79887 16.508 5.17773 16.5191C4.92106 16.5237 4.76232 16.5309 4.66308 16.5367C4.63045 16.5634 4.59196 16.5949 4.54882 16.6314L4.03906 17.0787L4.03613 17.0816L3.73925 17.3424C3.64297 17.4253 3.55141 17.503 3.46874 17.5709C3.38652 17.6384 3.30934 17.6993 3.24413 17.7486C3.222 17.7654 3.18743 17.7919 3.14648 17.8199L3.01074 17.901L3.0039 17.9049L2.99609 17.9088L2.87988 17.9576C2.60439 18.0589 2.31442 18.0693 2.05956 18.023C1.80579 17.977 1.53476 17.8651 1.31249 17.6676L1.2207 17.5777L1.21679 17.5738C1.21096 17.5675 1.21114 17.568 1.19042 17.5465C1.17491 17.5303 1.14467 17.4981 1.1123 17.4576C1.03508 17.3611 0.974251 17.2513 0.931635 17.1207C0.864927 16.9162 0.846686 16.6605 0.834955 16.3609C0.809786 15.7181 0.812494 14.4393 0.812494 11.8082C0.812494 9.15143 0.810678 7.83969 0.839838 7.13632C0.854335 6.78671 0.877634 6.53357 0.929682 6.32089C0.98514 6.09444 1.0714 5.93454 1.12011 5.83456V5.83359C1.50488 5.02765 2.16183 4.48151 3.04394 4.18906V4.18808C3.26931 4.11151 3.50795 4.09665 3.99706 4.08456C4.25838 4.07811 4.61837 4.07251 5.12206 4.06796L7.10937 4.05429L10.4824 4.03671V4.03476C10.4793 4.03101 10.4763 4.02688 10.4727 4.02304C10.4299 4.02156 10.3776 4.0196 10.3164 4.01816C10.1202 4.01352 9.84617 4.0096 9.51757 4.00644C8.86078 4.00012 7.99616 3.99667 7.12402 3.99667C6.25193 3.99667 5.37378 4.00012 4.69042 4.00644C4.34865 4.0096 4.05754 4.0135 3.84081 4.01816L3.50195 4.0289C2.39954 4.17001 1.43718 4.91064 0.997065 5.9498L0.916986 6.16074C0.861803 6.3222 0.841868 6.38019 0.824213 6.47812C0.804649 6.5867 0.786762 6.75856 0.774408 7.11191C0.749614 7.82141 0.749994 9.12253 0.749994 11.816C0.749994 14.2118 0.751069 15.4503 0.760736 16.1256C0.770593 16.8139 0.790498 16.8512 0.801752 16.8961L0.800776 16.8971C0.956465 17.5038 1.39636 17.9367 1.9873 18.0846Z" stroke="#F5F5F5" stroke-width="1.5" />
                      </g>
                      <defs>
                        <clipPath id="clip0_859_5738">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div> */}

                  <svg className="group-hover:text-" stroke="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_859_5738)">
                      <path d="M9.54218 11.8437C10.6285 11.837 11.7384 11.4268 12.6877 10.6474L13.1642 11.2265L12.6877 10.6464L12.6935 10.6425C12.6827 10.6513 12.698 10.6385 12.7629 10.5771C12.8174 10.5254 12.892 10.4541 12.9846 10.3642C13.1696 10.1843 13.4215 9.93553 13.7238 9.63666L15.9767 7.39252C17.4768 5.88851 18.2421 5.11995 18.6516 4.69037C18.9595 4.36729 19.0307 4.2714 19.0539 4.22943L19.0676 4.19916C19.2314 3.85472 19.2769 3.54201 19.2248 3.23529L19.1965 3.10345L19.1955 3.1015C19.0699 2.61356 18.7728 2.24709 18.3664 2.04584L18.1857 1.96967H18.1848C18.0974 1.93894 17.9285 1.90542 17.7258 1.89447C17.6229 1.88893 17.532 1.89063 17.4582 1.89545L17.2932 1.91791L17.2834 1.91986L17.1252 1.96771C17.0221 2.00458 16.9232 2.05184 16.8273 2.11127L16.6857 2.20892L16.6828 2.21088L16.6027 2.28412C16.5431 2.3391 16.4638 2.41417 16.3664 2.50775C16.1718 2.69461 15.9129 2.94752 15.6105 3.24603C15.0062 3.84261 14.2338 4.61472 13.4641 5.39056C12.6943 6.16644 11.9288 6.94485 11.3381 7.55267C11.0425 7.85684 10.7921 8.11729 10.6076 8.31244C10.5152 8.41019 10.4409 8.4893 10.3869 8.54877L10.3166 8.62689C9.68889 9.47503 9.32219 10.477 9.26483 11.4599L9.258 11.6562C9.25711 11.7411 9.25706 11.7996 9.258 11.8437H9.54218ZM10.3215 11.7109C10.282 11.7156 10.1822 11.7264 10.0627 11.705C9.92503 11.6804 9.73258 11.6066 9.58417 11.4199C9.44875 11.2495 9.42003 11.0708 9.41327 10.9765C9.40173 10.8149 9.44029 10.6629 9.45331 10.6103L9.53339 10.3232C9.67056 9.8461 9.97658 9.21554 10.2756 8.79095V8.78998C10.3233 8.72155 10.3968 8.63982 10.4416 8.59076C10.5024 8.52414 10.5821 8.43951 10.676 8.34076C10.8643 8.14256 11.1204 7.87832 11.4191 7.5722C12.0171 6.9595 12.7947 6.17125 13.5715 5.39056C14.3483 4.60979 15.1256 3.83445 15.7219 3.24701C16.0196 2.95371 16.2746 2.7057 16.4621 2.52631C16.5554 2.43706 16.6357 2.36182 16.6974 2.3056C16.7277 2.27809 16.7577 2.25078 16.7853 2.22748C16.7877 2.22549 16.8626 2.15839 16.9533 2.11029V2.11127C17.184 1.98876 17.4397 1.9498 17.6447 1.94818C17.8499 1.94661 18.1106 1.98138 18.3469 2.10443L18.3459 2.10541C19.0173 2.45128 19.3559 3.22069 19.1017 3.9433L19.0422 4.08783L19.0412 4.08978L18.9621 4.22357C18.9381 4.25719 18.9197 4.2784 18.9182 4.28021C18.8935 4.31049 18.8653 4.34334 18.8371 4.37494C18.7798 4.43917 18.7033 4.52118 18.6135 4.61615C18.4325 4.80757 18.1815 5.06714 17.8859 5.36908C17.294 5.9737 16.5123 6.76056 15.7238 7.54681C14.9352 8.33323 14.1376 9.12098 13.5148 9.72748C13.2039 10.0303 12.9345 10.2901 12.7307 10.4824C12.629 10.5782 12.5402 10.6596 12.4699 10.7226C12.4177 10.7695 12.3307 10.8476 12.2541 10.8984H12.2551C11.803 11.1984 11.1767 11.491 10.6555 11.6376L10.4396 11.6913L10.4289 11.6933L10.3215 11.7109Z" stroke="#F5F5F5" stroke-width="1.5" />
                      <path d="M1.9873 18.0846C2.18813 18.1325 2.52193 18.1227 2.75781 18.0641L2.85253 18.0357L2.85742 18.0348C3.0375 17.9717 3.16221 17.9158 3.49218 17.6402L3.90038 17.2828L4.49023 16.7516L4.70312 16.5592L4.99023 16.5582L9.32226 16.5465L13.5381 16.5357L13.7812 16.4596H13.7822C14.9467 16.0984 15.7266 15.2955 16.0205 14.2008V14.1998C16.0644 14.0332 16.0787 13.973 16.0898 13.8297C16.0967 13.7404 16.1013 13.6262 16.1055 13.4605L16.1172 12.7828C16.1253 12.0824 16.1249 11.7956 16.1055 11.6441L16.1045 11.6422C16.1019 11.6393 16.0997 11.6358 16.0967 11.6324L16.1025 11.6275L16.1016 11.6266L16.0957 11.6324L16.0928 11.6295H16.0918C16.0905 11.6304 16.0877 11.6324 16.085 11.6353H16.0859L16.085 11.6363C16.0684 11.7646 16.0625 12.0094 16.0625 12.5894C16.0625 13.2701 16.058 13.5959 16.0185 13.8678L15.9668 14.1324L15.9648 14.1412L15.9072 14.3375C15.616 15.2391 14.9771 15.9222 14.0918 16.2877L13.8984 16.3609L13.7129 16.4088C13.5102 16.4461 13.2439 16.4551 12.8086 16.4635C12.4892 16.4696 12.0458 16.4746 11.4238 16.4791L8.96874 16.4918C6.91878 16.5016 5.79887 16.508 5.17773 16.5191C4.92106 16.5237 4.76232 16.5309 4.66308 16.5367C4.63045 16.5634 4.59196 16.5949 4.54882 16.6314L4.03906 17.0787L4.03613 17.0816L3.73925 17.3424C3.64297 17.4253 3.55141 17.503 3.46874 17.5709C3.38652 17.6384 3.30934 17.6993 3.24413 17.7486C3.222 17.7654 3.18743 17.7919 3.14648 17.8199L3.01074 17.901L3.0039 17.9049L2.99609 17.9088L2.87988 17.9576C2.60439 18.0589 2.31442 18.0693 2.05956 18.023C1.80579 17.977 1.53476 17.8651 1.31249 17.6676L1.2207 17.5777L1.21679 17.5738C1.21096 17.5675 1.21114 17.568 1.19042 17.5465C1.17491 17.5303 1.14467 17.4981 1.1123 17.4576C1.03508 17.3611 0.974251 17.2513 0.931635 17.1207C0.864927 16.9162 0.846686 16.6605 0.834955 16.3609C0.809786 15.7181 0.812494 14.4393 0.812494 11.8082C0.812494 9.15143 0.810678 7.83969 0.839838 7.13632C0.854335 6.78671 0.877634 6.53357 0.929682 6.32089C0.98514 6.09444 1.0714 5.93454 1.12011 5.83456V5.83359C1.50488 5.02765 2.16183 4.48151 3.04394 4.18906V4.18808C3.26931 4.11151 3.50795 4.09665 3.99706 4.08456C4.25838 4.07811 4.61837 4.07251 5.12206 4.06796L7.10937 4.05429L10.4824 4.03671V4.03476C10.4793 4.03101 10.4763 4.02688 10.4727 4.02304C10.4299 4.02156 10.3776 4.0196 10.3164 4.01816C10.1202 4.01352 9.84617 4.0096 9.51757 4.00644C8.86078 4.00012 7.99616 3.99667 7.12402 3.99667C6.25193 3.99667 5.37378 4.00012 4.69042 4.00644C4.34865 4.0096 4.05754 4.0135 3.84081 4.01816L3.50195 4.0289C2.39954 4.17001 1.43718 4.91064 0.997065 5.9498L0.916986 6.16074C0.861803 6.3222 0.841868 6.38019 0.824213 6.47812C0.804649 6.5867 0.786762 6.75856 0.774408 7.11191C0.749614 7.82141 0.749994 9.12253 0.749994 11.816C0.749994 14.2118 0.751069 15.4503 0.760736 16.1256C0.770593 16.8139 0.790498 16.8512 0.801752 16.8961L0.800776 16.8971C0.956465 17.5038 1.39636 17.9367 1.9873 18.0846Z" stroke="#F5F5F5" stroke-width="1.5" />
                    </g>
                    <defs>
                      <clipPath id="clip0_859_5738">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  {/* <img src={editBlog} alt="bookingImage" /> */}
                  <ListItemText sx={{
                    '&:hover': {
                      '& .MuiTypography-root': {
                        color: '#F5F5F5', // Change text color on hover
                      },
                    },
                  }} primary="Booking" primaryTypographyProps={{ fontSize: '14px', pl: '8px', fontWeight: 500, color: '#F5F5F5' }} />
                </ListItemButton>

                {/* Other Menus */}
                <ListItemButton sx={{
                  width: '210px',
                  height: '36px',
                  pb: '12px', my: '8px', borderRadius: '6px', '&:hover': {
                    bgcolor: '#BA1654',
                    color: '#F5F5F5'
                  }
                }}>
                  <img src={UserWithCheck} alt="checkImageUser" />
                  <ListItemText sx={{
                    '&:hover': {
                      '& .MuiTypography-root': {
                        color: '#F5F5F5', // Change text color on hover
                      },
                    },
                  }} primary="Agent" primaryTypographyProps={{ fontSize: '14px', pl: '8px', fontWeight: 500, color: '#9F9F9F' }} />
                </ListItemButton>

                <ListItemButton sx={{
                  width: '210px',
                  height: '36px',
                  pb: '12px', my: '8px', borderRadius: '6px', '&:hover': {
                    bgcolor: '#BA1654',
                    color: '#F5F5F5'
                  }
                }}>
                  <img src={supplierIcon} alt="supplier" />
                  <ListItemText sx={{
                    '&:hover': {
                      '& .MuiTypography-root': {
                        color: '#F5F5F5', // Change text color on hover
                      },
                    },
                  }} primary="Supplier" primaryTypographyProps={{ fontSize: '14px', pl: '8px', fontWeight: 500, color: '#9F9F9F' }} />
                </ListItemButton>

                <ListItemButton sx={{
                  width: '210px',
                  height: '36px',
                  pb: '12px', my: '8px', borderRadius: '6px', '&:hover': {
                    bgcolor: '#BA1654',
                    color: '#F5F5F5'
                  }
                }} onClick={() => setOpenProductManagement(!openProductManagement)}>
                  <img src={supplierIcon} alt="product" />
                  <ListItemText sx={{
                    '&:hover': {
                      '& .MuiTypography-root': {
                        color: '#F5F5F5', // Change text color on hover
                      },
                    },
                  }} primary="Product" primaryTypographyProps={{ fontSize: '14px', pl: '8px', fontWeight: 500, color: '#9F9F9F' }} />
                  {openProductManagement ? <ExpandLess sx={{ color: "#9F9F9F", pl: 0 }} /> : <ExpandMore sx={{ color: "#9F9F9F" }} />}
                </ListItemButton>
                <Collapse in={openProductManagement} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{
                      borderRadius: '6px',
                      '&:hover': {
                        bgcolor: '#BA1654',
                        color: '#F5F5F5',
                        borderRadius: '6px',
                      }
                    }}>
                      <ListItemText sx={{
                        '&:hover': {
                          '& .MuiTypography-root': {
                            color: '#F5F5F5', // Change text color on hover
                          },
                        },
                      }} primary="Product 1" primaryTypographyProps={{ fontSize: '14px', pl: '8px', fontWeight: 500, color: '#9F9F9F' }} />
                    </ListItemButton>
                    <ListItemButton sx={{
                      borderRadius: '6px',
                      '&:hover': {
                        bgcolor: '#BA1654',
                        color: '#F5F5F5',
                        borderRadius: '6px',
                      }
                    }}>
                      <ListItemText sx={{
                        '&:hover': {
                          '& .MuiTypography-root': {
                            color: '#F5F5F5', // Change text color on hover
                          },
                        },
                      }} primary="Product 2" primaryTypographyProps={{ fontSize: '14px', pl: '8px', fontWeight: 500, color: '#9F9F9F' }} />
                    </ListItemButton>
                  </List>
                </Collapse>

                {/* Divider */}
                <div className="flex justify-center pt-3 pb-4">
                  <img className="w-[230px]" src={dividerImage1} alt="dividerImage" />
                </div>

                {/* Settings */}
                <ListItemButton sx={{
                  width: '210px',
                  height: '36px',
                  pb: '12px', my: '8px', borderRadius: '6px', '&:hover': {
                    bgcolor: '#BA1654',
                    color: '#F5F5F5'
                  }
                }}>
                  <img src={settingIcon} alt="settingIcon" />
                  <ListItemText sx={{
                    '&:hover': {
                      '& .MuiTypography-root': {
                        color: '#F5F5F5', // Change text color on hover
                      },
                    },
                  }} primary="Settings" primaryTypographyProps={{ fontSize: '14px', pl: '8px', fontWeight: 500, color: '#9F9F9F' }} />
                </ListItemButton>

                {/* Help */}
                <ListItemButton sx={{
                  width: '210px',
                  height: '36px',
                  pb: '12px', my: '8px', borderRadius: '6px', '&:hover': {
                    bgcolor: '#BA1654',
                    color: '#F5F5F5'
                  }
                }}>
                  <img src={helpIcon} alt="helpIcon" />
                  <ListItemText sx={{
                    '&:hover': {
                      '& .MuiTypography-root': {
                        color: '#F5F5F5', // Change text color on hover
                      },
                    },
                  }} primary="Help" primaryTypographyProps={{ fontSize: '14px', pl: '8px', fontWeight: 500, color: '#9F9F9F' }} />
                </ListItemButton>
              </List>
            </div>

          </div>

          {/* <div className="flex items-center justify-center py-6">
            <img src="/logo.svg" alt="ActivityBeds" className="h-8" />
          </div> */}


          {/* Bottom - Logout */}
          <div className="">
            <div className="flex justify-center pt-4 pb-4">
              <img className="w-[230px]" src={dividerImage1} alt="dividerImage" />
            </div>
            <ListItemButton>
              <ListItemText sx={{
                '&:hover': {
                  '& .MuiTypography-root': {
                    color: '#F5F5F5', // Change text color on hover
                  },
                },
              }} primary="Log Out" primaryTypographyProps={{ fontSize: '14px', fontWeight: 500, color: '#9F9F9F' }} />
              <ListItemIcon className="text-gray-300" sx={{ minWidth: 0 }}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5" stroke="#9F9F9F" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.33333 14.1666L12.5 9.99998L8.33333 5.83331" stroke="#9F9F9F" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.5 10H2.5" stroke="#9F9F9F" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              </ListItemIcon>
            </ListItemButton>
          </div>
        </Drawer>

        <div className="flex justify-center">
          <svg width="210" height="1" viewBox="0 0 210 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="210" y2="0.5" stroke="#9F9F9F" />
          </svg>

        </div>
        {/* <div className="p-6">
        <Button variant="outlined" color="secondary" fullWidth>
          Log Out
        </Button>
      </div> */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-7 overflow-x-auto">
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

        {/* Filters */}
        <div className="px-4 bg-[#181819] pb-6 rounded-t-xl">
          <div className="flex pt-[20px] flex-wrap gap-4 pb-6">
            {['Agent', 'Supplier', 'Booking ID', 'Lead Pax Name', 'Booking Status'].map((filter) => (
              <CustomSelect label={filter == 'Booking Status' ? filter : `${filter}...`} options={[`${filter} 1`, `${filter} 2`, `${filter} 3`]} />
            ))}
            <Button variant="contained" sx={{ bgcolor: '#CD1E5F', width: '138px', height: '40px', gap: '12px', textTransform: 'capitalize', borderRadius: '8px', fontWeight: 500, fontSize: '14px' }}>
              Apply
            </Button>
            <IconButton color="primary" sx={{ border: '1px solid #F2377D', borderRadius: '8px', width: '117px', height: '40px', py: '10px', px: '20px' }}>
              <img src={filterIcon} alt="filterIcon" />
              <Typography sx={{ color: '#D7D7D7', fontSize: '14px', marginLeft: '8px', fontWeight: 500 }}>Filters</Typography>
            </IconButton>
          </div>

          {/* Booking Table */}

          {/* <div className="p-4 bg-[#1C1C1E] rounded-xl">
            <div className="overflow-x-auto">
              <TableContainer component={Paper} sx={{ backgroundColor: '#1C1C1E', boxShadow: 'none' }}>
                <Table sx={{ minWidth: 1000 }}>
                  <TableHead>
                    <TableRow>
                      {['Booking Status', 'Agent', 'Booking Source', 'Booking ID', 'Booking Date', 'Travel Date', 'Lead Pax Name', 'Product Type', 'Status', 'Product City','Name'].map((header) => (
                        <StyledTableCell key={header}>{header}</StyledTableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {bookings.map((b, i) => (
                      <TableRow
                        key={i}
                        hover
                        sx={{
                          "&:hover": { backgroundColor: "#444444" },
                        }}
                      >
                        <TableCell sx={{ borderBottom: '1px solid #444444' }}>
                          <Chip
                            label={b.leadPax}
                            size="small"
                            // color={b.leadPax == "M" ? '#427EF6' : '#B442F6'}
                            className={b.leadPax == "M" ? 'bg-[#427EF6]' : 'bg-[#B442F6]'}
                            sx={b.leadPax == "M" ? { backgroundColor: '#427EF6', fontSize: "0.7rem", borderRadius: 2.5 } : { backgroundColor: '#B442F6', fontSize: "0.7rem", borderRadius: 1 }}
                          />
                        </TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #444444' }}>
                          <div style={{ fontWeight: "bold", color: '#F5F5F5', fontSize: '12px' }}>{b.agent}</div>
                          <div style={{ fontSize: 12, color: "#9F9F9F" }}>
                            Acc. Manager - {b.manager}
                          </div>
                        </TableCell>
                        {b.source.includes('image') ? <TableCell sx={{ color: "#FFFFFF", borderBottom: '1px solid #444444', fontSize: '12px', fontWeight: 700 }}><img src={b.source} alt="notapiImage" /></TableCell> : <TableCell sx={{ color: "#FFFFFF", borderBottom: '1px solid #444444', fontSize: '12px', fontWeight: 700 }}>{b.source}</TableCell>}
                        <TableCell sx={{ color: "#FF5594", borderBottom: '1px solid #444444', fontSize: '12px', fontWeight: 500 }}>{b.id}</TableCell>
                        <TableCell sx={{ color: "#9F9F9F", borderBottom: '1px solid #444444', fontSize: '12px', fontWeight: 500 }}>{b.date}</TableCell>
                        <TableCell sx={{ color: "#9F9F9F", borderBottom: '1px solid #444444', fontSize: '12px', fontWeight: 500 }}>{b.travelDate}</TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #444444' }}>
                          <div className="text-xs font-medium text-[#B9B9B9]">{b.leadPaxName}</div>
                          <div style={{ fontSize: "10px", color: "#B9B9B9", fontWeight: 500 }}>{b.paxDetails}</div>
                        </TableCell>
                        <TableCell sx={{ color: "white", borderBottom: '1px solid #444444' }}>
                          {b.type === "Boat" ? (
                            <Sailing sx={{ color: "#00C7BE" }} />
                          ) : (
                            <DirectionsCar sx={{ color: "#FFCC00" }} />
                          )}
                        </TableCell>
                        <TableCell sx={{ color: "white", borderBottom: '1px solid #444444' }}>
                          <Chip
                            label={b.status}
                            size="small"
                            color={statusColors[b.status]}
                            sx={{ fontSize: "0.7rem", borderRadius: 1 }}
                          />
                        </TableCell>
                        <TableCell sx={{ color: "white", borderBottom: '1px solid #444444' }}>{b.city}</TableCell>
                        <TableCell sx={{ color: "white", borderBottom: '1px solid #444444' }}>
                          <div className="font-medium text-[#D7D7D7]">{b.product}</div>
                          <div style={{ fontSize: "10px", color: "#9F9F9F", fontWeight: 500 }}>{b.productDetails}</div>
                        </TableCell>

                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div> */}
          <div className="">
            <div className="bg-[#181819] rounded-lg border border-1 border-[#444444]">
              {/* <div className=""> */}
              <TableContainer
                component={Paper}
                sx={{
                  backgroundColor: "#181819",
                  borderRadius: "8px",
                  // border: "1px solid #",
                  // minWidth: "1300px",
                  // overflowX: "auto",
                }}
              >
                <Table sx={{
                  // backgroundColor: "#181819",
                  // borderRadius: "8px",
                  // border: "1px solid #444444",
                  minWidth: "1300px",
                  overflowX: "auto",
                }}>
                  <TableHead>
                    <TableRow>
                      {[
                        { key: "Booking Status", width: '20px' },
                        { key: "Agent", width: '269px' },
                        { key: "Booking Source", width: '5px' },
                        { key: "Booking ID", width: '30px' },
                        { key: "Booking Date", width: '60px' },
                        { key: "Travel Date", width: '95px' },
                        { key: "Lead Pax Name", width: '50px' },
                        { key: "Product Type", width: '30px' },
                        { key: "Booking Status", width: '30px' },
                        { key: "Product City", width: '50px' },
                        { key: "Name", width: '250px' }
                      ].map((header) => (
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
                    {bookings.map((b, i) => (
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
                              // textAlign: "center",
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
                            // cursor: "pointer",
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
                            // <div className="flex justify-center">
                            //   <img src={sailingBoatImage} alt="boatImage" />
                            // </div>
                            <div className="flex justify-center">
                              <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.4531 1.90312C10.3656 1.99609 10.2891 2.1164 10.2891 2.17109C10.2891 2.23124 10.3711 2.41171 10.475 2.57577C11.4156 4.10155 11.7383 4.69765 12.2031 5.7914C13.2914 8.35077 13.7891 10.8226 13.7891 13.6719C13.7891 15.9141 13.4938 17.8445 12.8211 19.9664C12.5367 20.8797 12.5367 21.0055 12.832 21.1476C13.0453 21.2516 12.9906 21.268 14.0352 20.7922C15.2602 20.2344 16.7586 19.8023 18.2734 19.5672C18.9461 19.4633 19.2906 19.4469 20.543 19.4469C22.1289 19.4469 22.8016 19.518 24.1414 19.8242C24.7867 19.9719 24.9289 19.9555 25.082 19.7203C25.1641 19.6 25.1641 19.5234 25.1094 19.0476C24.7813 16.2531 23.8625 13.568 22.3914 11.1016C19.9031 6.93984 16.0641 3.68593 11.7438 2.07812C10.732 1.70077 10.6664 1.6953 10.4531 1.90312Z" fill="#00C7BE" />
                                <path d="M9.93905 4.39142C9.8242 4.50626 9.81327 4.58282 9.77499 5.3047C9.52889 10.4453 7.77342 15.3453 4.71639 19.4414C4.42108 19.8297 4.16952 20.1961 4.14764 20.2508C4.10389 20.3711 4.19139 20.6117 4.31717 20.7047C4.44842 20.8086 4.6453 20.7977 5.01717 20.6719C5.72264 20.4258 6.38983 20.3274 7.30858 20.3219C8.48983 20.3219 9.20624 20.4586 10.3 20.8961C11.0711 21.2078 11.1312 21.1695 11.4648 20.1524C12.1594 18.0031 12.4711 15.9633 12.4765 13.557C12.4765 11.1508 12.1539 8.96329 11.4594 6.72657C11.1476 5.72579 10.6281 4.44064 10.4914 4.34767C10.3219 4.22736 10.0867 4.24376 9.93905 4.39142Z" fill="#00C7BE" />
                                <path d="M13.7891 22.2086L3.04297 22.6406L2.88984 22.8047C2.80781 22.8977 2.74219 23.007 2.74219 23.0508C2.74219 23.2203 4.21875 26.0805 4.34453 26.168C4.46484 26.2445 5.41094 26.25 13.3297 26.2391L22.1836 26.2227L22.6211 26.0969C24.3109 25.6211 25.5469 24.4398 26.0938 22.7828C26.2633 22.2688 26.2633 22.0008 26.0992 21.8695C25.9898 21.7766 25.8859 21.7656 25.2516 21.7711C24.8578 21.7766 19.7008 21.9734 13.7891 22.2086Z" fill="#00C7BE" />
                              </svg>
                            </div>

                          ) : (
                            // <div className="flex justify-center">
                            //   <img src={carImage} alt="carImage" />
                            // </div>
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
                              // fontSize: "12px",
                              borderRadius: "16px",
                              // height: 24,
                              // color: "#FFFFFF",
                              // fontWeight: 500,
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
                  {/* <img width={25} src={chevronRight} alt="chevronRightIamge" /> */}
                </div>
              </div>
            </div>
          </div>


          {/* <div className="p-4 bg-[#181819] rounded-xl">
            <div className="overflow-x-auto">
              <TableContainer
                component={Paper}
                sx={{
                  backgroundColor: "#181819",
                  borderRadius: "8px",
                  boxShadow: 3,
                  border: "1px solid #444",
                  minWidth: "1200px",
                }}
              >
                <Table stickyHeader>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: "#28282A" }}>
                      {[
                        "Booking Status",
                        "Agent",
                        "Booking Source",
                        "Booking ID",
                        "Booking Date",
                        "Travel Date",
                        "Lead Pax Name",
                        "Product Type",
                        "Booking Status",
                        "Product City",
                        "Product",
                      ].map((header) => (
                        <TableCell
                          key={header}
                          sx={{
                            color: "#B9B9B9",
                            fontSize: 12,
                            fontWeight: 500,
                            backgroundColor: "#28282A",
                            borderBottom: "1px solid #444",
                          }}
                        >
                          {header}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {bookings.map((b, i) => (
                      <TableRow
                        key={i}
                        hover
                        sx={{
                          "&:hover": { backgroundColor: "#2A2A2D" },
                          borderBottom: "1px solid #444",
                        }}
                      >
                        <TableCell>
                          <Chip
                            label={b.leadPax}
                            size="small"
                            sx={{
                              backgroundColor: b.leadPax === "M" ? "#427EF6" : "#B442F6",
                              color: "#fff",
                              fontSize: "0.7rem",
                              borderRadius: "12px",
                            }}
                          />
                        </TableCell>

                        <TableCell>
                          <div className="text-white text-sm font-semibold">{b.agent}</div>
                          <div className="text-gray-400 text-xs">
                            Acc. Manager - {b.manager}
                          </div>
                        </TableCell>

                        <TableCell>
                          {b.source.includes("image") ? (
                            <img src={b.source} alt="source" className="w-6 h-6" />
                          ) : (
                            <div className="text-white text-xs font-semibold">{b.source}</div>
                          )}
                        </TableCell>

                        <TableCell className="text-pink-400 font-medium underline cursor-pointer text-xs">
                          {b.id}
                        </TableCell>

                        <TableCell className="text-gray-400 text-xs">{b.date}</TableCell>

                        <TableCell className="text-gray-400 text-xs">{b.travelDate}</TableCell>

                        <TableCell>
                          <div className="text-[#B9B9B9] text-xs font-medium">{b.leadPaxName}</div>
                          <div className="text-[#B9B9B9] text-[10px]">{b.paxDetails}</div>
                        </TableCell>

                        <TableCell>
                          {b.type === "Boat" ? (
                            <Sailing sx={{ color: "#00C7BE" }} />
                          ) : (
                            <DirectionsCar sx={{ color: "#FFCC00" }} />
                          )}
                        </TableCell>

                        <TableCell>
                          <Chip
                            label={b.status}
                            size="small"
                            color={statusColors[b.status]}
                            sx={{
                              fontSize: "0.7rem",
                              borderRadius: "8px",
                              color: "#fff",
                              textTransform: "capitalize",
                            }}
                          />
                        </TableCell>

                        <TableCell className="text-white text-xs">{b.city}</TableCell>

                        <TableCell>
                          <div className="text-[#D7D7D7] text-xs font-semibold">{b.product}</div>
                          <div className="text-[#9F9F9F] text-[10px]">{b.productDetails}</div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div> */}

          {/* <div className="overflow-x-auto">
            <TableContainer
              component={Paper}
              sx={{
                backgroundColor: "#181819",
                borderRadius: '8px',
                boxShadow: 4,
                // overflowX: "auto",
                // overflowX: 'scroll', width: "100%",
                border: '1px solid #444444'
              }}
            >
              <Table sx={{ minWidth: 1000 }} aria-label="booking table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#28282A", border: '1px solid #444444' }}>
                    {[
                      "Booking Status",
                      "Agent",
                      "Booking Source",
                      "Booking ID",
                      "Booking Date",
                      "Travel Date",
                      "Lead Pax Name",
                      "Product Type",
                      "Booking Status",
                      "Product City",
                      "Name",
                    ].map((head) => (
                      <TableCell
                        key={head}
                        sx={{ color: "#B9B9B9", fontWeight: 500, fontSize: 12, borderBottom: '1px solid #444444' }}
                      >
                        {head}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bookings.map((b, i) => (
                    <TableRow
                      key={i}
                      hover
                      sx={{
                        "&:hover": { backgroundColor: "#444444" },
                      }}
                    >
                      <TableCell sx={{ borderBottom: '1px solid #444444' }}>
                        <Chip
                          label={b.leadPax}
                          size="small"
                          // color={b.leadPax == "M" ? '#427EF6' : '#B442F6'}
                          className={b.leadPax == "M" ? 'bg-[#427EF6]' : 'bg-[#B442F6]'}
                          sx={b.leadPax == "M" ? { backgroundColor: '#427EF6', fontSize: "0.7rem", borderRadius: 2.5 } : { backgroundColor: '#B442F6', fontSize: "0.7rem", borderRadius: 1 }}
                        />
                      </TableCell>
                      <TableCell sx={{ borderBottom: '1px solid #444444' }}>
                        <div style={{ fontWeight: "bold", color: '#F5F5F5', fontSize: '12px' }}>{b.agent}</div>
                        <div style={{ fontSize: 12, color: "#9F9F9F" }}>
                          Acc. Manager - {b.manager}
                        </div>
                      </TableCell>
                      {b.source.includes('image') ? <TableCell sx={{ color: "#FFFFFF", borderBottom: '1px solid #444444', fontSize: '12px', fontWeight: 700 }}><img src={b.source} alt="notapiImage" /></TableCell> : <TableCell sx={{ color: "#FFFFFF", borderBottom: '1px solid #444444', fontSize: '12px', fontWeight: 700 }}>{b.source}</TableCell>}
                      <TableCell sx={{ color: "#FF5594", borderBottom: '1px solid #444444', fontSize: '12px', fontWeight: 500 }}>{b.id}</TableCell>
                      <TableCell sx={{ color: "#9F9F9F", borderBottom: '1px solid #444444', fontSize: '12px', fontWeight: 500 }}>{b.date}</TableCell>
                      <TableCell sx={{ color: "#9F9F9F", borderBottom: '1px solid #444444', fontSize: '12px', fontWeight: 500 }}>{b.travelDate}</TableCell>
                      <TableCell sx={{ borderBottom: '1px solid #444444' }}>
                        <div className="text-xs font-medium text-[#B9B9B9]">{b.leadPaxName}</div>
                        <div style={{ fontSize: "10px", color: "#B9B9B9", fontWeight: 500 }}>{b.paxDetails}</div>
                      </TableCell>
                      <TableCell sx={{ color: "white", borderBottom: '1px solid #444444' }}>
                        {b.type === "Boat" ? (
                          <Sailing sx={{ color: "#00C7BE" }} />
                        ) : (
                          <DirectionsCar sx={{ color: "#FFCC00" }} />
                        )}
                      </TableCell>
                      <TableCell sx={{ color: "white", borderBottom: '1px solid #444444' }}>
                        <Chip
                          label={b.status}
                          size="small"
                          color={statusColors[b.status]}
                          sx={{ fontSize: "0.7rem", borderRadius: 1 }}
                        />
                      </TableCell>
                      <TableCell sx={{ color: "white", borderBottom: '1px solid #444444' }}>{b.city}</TableCell>
                      <TableCell sx={{ color: "white", borderBottom: '1px solid #444444' }}>
                        <div className="font-medium text-[#D7D7D7]">{b.product}</div>
                        <div style={{ fontSize: "10px", color: "#9F9F9F", fontWeight: 500 }}>{b.productDetails}</div>
                      </TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div> */}

          {/* Pagination */}

        </div>
      </main>
    </div>
  );
}


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
  );
}