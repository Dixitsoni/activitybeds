import React, { useState } from 'react'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Collapse, Drawer, List, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'
import dividerImage1 from '../../assets/images/Divider_1.png'
import logo from '../../assets/images/activitybed.3a214645e1b5c84c0bdf 1.png'
import UserWithCheck from '../../assets/images/fi_user-check.png'
import supplierIcon from '../../assets/images/fi_box.png'
import settingIcon from '../../assets/images/setting-2.png'
import helpIcon from '../../assets/images/fi_help-circle.png'
import leftChevrolet from '../../assets/images/fi_chevrons-left.png'

function Sidebar() {

    const [openUserManagement, setOpenUserManagement] = useState(false);
    const [openProductManagement, setOpenProductManagement] = useState(false);

    return (
        <aside className="w-64 flex flex-col">
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
                }}
            >
                {/* Top Logo */}

                <div className="pt-7 px-4">
                    <div className="flex items-center justify-between">
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
        </aside>
    )
}

export default Sidebar
