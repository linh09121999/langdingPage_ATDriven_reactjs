import React from 'react';

import { useGlobal } from '../context/GlobalContext'

const Footer: React.FC = () => {
    const { footerContent, logo } = useGlobal()
    return (
        <footer>
            {footerContent.map((footer, id) => (
                <div key={id} className="relative mx-auto max-w-6xl px-4 sm:px-6">
                    <div
                        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
                        aria-hidden="true"
                    >
                        <img src={footer.img} className="max-w-none"
                            width={1076}
                            height={378}
                            alt="Footer illustration"
                        />
                    </div>
                    <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
                        {footer.product.map((product, id1) => (
                            <div key={id1} className="space-y-2">
                                <h3 className="text-sm font-medium text-gray-200">{product.name}</h3>
                                <ul className="space-y-2 text-sm">
                                    {product.content.map((content, id2) => (
                                        <li key={id2}>
                                            <a
                                                className="text-indigo-200/65 transition hover:text-indigo-500"
                                                href="#0"
                                            >
                                                {content}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        {footer.conpany.map((conpany, id1) => (
                            <div className="space-y-2">
                                <h3 className="text-sm font-medium text-gray-200">{conpany.name}</h3>
                                <ul className="space-y-2 text-sm">
                                    {conpany.content.map((content, id2) => (
                                        <li key={id2}>
                                            <a
                                                className="text-indigo-200/65 transition hover:text-indigo-500"
                                                href="#0"
                                            >
                                                {content}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        {footer.resources.map((resources, id1) => (
                            <div className="space-y-2">
                                <h3 className="text-sm font-medium text-gray-200">{resources.name}</h3>
                                <ul className="space-y-2 text-sm">
                                    {resources.content.map((content, id2) => (
                                        <li key={id2}>
                                            <a
                                                className="text-indigo-200/65 transition hover:text-indigo-500"
                                                href="#0"
                                            >
                                                {content}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        {footer.contentLibrary.map((contentLibrary, id1) => (
                            <div key={id1} className="space-y-2">
                                <h3 className="text-sm font-medium text-gray-200">{contentLibrary.name}</h3>
                                <ul className="space-y-2 text-sm">
                                    {contentLibrary.content.map((content, id2) => (
                                        <li key={id2}>
                                            <a
                                                className="text-indigo-200/65 transition hover:text-indigo-500"
                                                href="#0"
                                            >
                                                {content}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
                            <div className="mb-3">
                                <div className="inline-flex shrink-0" aria-label="Cruip">
                                    <img src={logo} alt='Logo' width={32} height={32} />
                                </div>

                            </div>
                            <div className="text-sm">
                                <p className="mb-3 text-indigo-200/65">
                                    {footer.text1}
                                    <span className="text-gray-700"> · </span>
                                    <a
                                        className="text-indigo-200/65 transition hover:text-indigo-500"
                                        href="#0"
                                    >
                                        {footer.text2}
                                    </a>
                                </p>
                                <ul className="inline-flex gap-1">
                                    {footer.social.map((social, id) => (
                                        <li>
                                            <a
                                                className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                                                href="#0"
                                                aria-label={social.title}
                                            >
                                                {social.icon}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </footer>
    )
}

export default Footer;