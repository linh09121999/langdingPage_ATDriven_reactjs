import React, { useState, useContext, useRef } from 'react';
import Nav from './Nav'
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Divider
} from '@mui/material';

import { useGlobal } from '../context/GlobalContext'

const Header: React.FC = () => {
    const { logo, nameLogo, isMobile, iconClose, iconMenu, pages, setSelectNav, scrollTo } = useGlobal()

    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = (state: boolean) => () => {
        setOpen(state);
    };

    const sxPaperPropsDrawer = {
        sx: {
            background: 'color-mix(in oklab, var(--color-gray-900) 90%, transparent);',
            color: 'var(--color-gray-200)',
        }
    }

    const sxBox1Drawer = {
        width: 200
    }

    const sxBox2Drawer = {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '12px 16px',
        cursor: 'pointer'
    }

    const sxIconButton = {
        color: 'white',
        fontSize: '2rem'
    }

    const sxDivider = {
        backgroundColor: 'rgba(0, 0, 0, 0.12)'

    }

    const sxListItemDrawer = {
        padding: '12px 24px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)'
        },
        '& .MuiListItemIcon-root': {
            color: 'inherit',
            minWidth: '40px'
        }
    }

    const sxListItemIcon = {
        fontSize: '1.2rem'
    }

    const sxPrimaryTypographyProps = {
        fontSize: '1rem',
        fontWeight: 'medium',
        transition: 'all 0.3s ease',
    }

    return (
        <header className="z-30 mt-2 w-full md:mt-5 fixed">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
                    {/* logo */}
                    <div className="flex flex-1 items-center gap-2">
                        <img src={logo} alt='Logo' width={32} height={32} />
                        <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500 '>{nameLogo}</span>
                    </div>

                    {/* page */}
                    {isMobile ? (
                        <>
                            <button className="menu-icon"
                                onClick={toggleDrawer(true)}
                            >{iconMenu}</button>
                            <Drawer
                                anchor="left"
                                open={open}
                                onClose={toggleDrawer(false)}
                                PaperProps={sxPaperPropsDrawer}
                            >
                                <Box sx={sxBox1Drawer}>
                                    <Box sx={sxBox2Drawer}>
                                        <IconButton onClick={toggleDrawer(false)} sx={sxIconButton}>
                                            {iconClose}
                                        </IconButton>
                                    </Box>

                                    <Divider sx={sxDivider} />

                                    <List>
                                        {pages.map((page, index) => (
                                            <ListItem
                                                button
                                                key={index}
                                                onClick={() => {
                                                    setSelectNav(index)
                                                    scrollTo(page.id)
                                                    setOpen(false)
                                                }}
                                                sx={sxListItemDrawer}
                                            >
                                                <ListItemIcon sx={sxListItemIcon}>{page.icon}</ListItemIcon>
                                                <ListItemText
                                                    primary={page.title}
                                                    primaryTypographyProps={sxPrimaryTypographyProps}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                    <ul className="flex flex-1 items-center justify-center w-full gap-3 p-4">
                                        <li>
                                            <a
                                                className="w-full btn-sm px-3 py-[7px] relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                                                href="/signin"
                                            >
                                                Sign In
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="w-full btn-sm px-3 py-[7px] bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                                                href="/signup"
                                            >
                                                Register
                                            </a>
                                        </li>
                                    </ul>
                                </Box>
                            </Drawer>
                        </>
                    ) : (
                        <>
                            <Nav />
                            <ul className="flex flex-1 items-center justify-end gap-3">
                                <li>
                                    <a
                                        className="btn-sm px-3 py-[7px] relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                                        href="/signin"
                                    >
                                        Sign In
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="btn-sm px-3 py-[7px] bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                                        href="/signup"
                                    >
                                        Register
                                    </a>
                                </li>
                            </ul>
                        </>
                    )}

                </div>
            </div>
        </header>
    )
}

export default Header