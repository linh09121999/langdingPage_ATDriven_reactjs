import React from 'react';
import Nav from './Nav'

import { useGlobal } from '../context/GlobalContext'

const Header: React.FC = () => {
    const { logo, nameLogo } = useGlobal()
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
                    <Nav />

                    {/* Desktop sign in links */}
                    <ul className="flex flex-1 items-center justify-end gap-3">
                        <li>
                            <a className="btn-sm px-3 py-[7px] relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]" href="/signin">Sign In</a>
                        </li>
                        <li>
                            <a className="btn-sm px-3 py-[7px] bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]" href="/signup">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header