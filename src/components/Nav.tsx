import React from 'react';
import { useGlobal } from '../context/GlobalContext'

const Nav: React.FC = () => {
    const { pages, setSelectNav, selectNav, scrollTo } = useGlobal()
    return (
        <ul className="nav-links">
            {pages.map((page, index) => (
                <li key={page.id}>
                    <a
                        onClick={() => {
                            setSelectNav(index)
                            scrollTo(page.id)
                        }}
                        className={`${selectNav === index ? 'active' : ''} `}
                    >{page.title}
                    </a>
                </li>
            ))}
        </ul>

    )
}

export default Nav