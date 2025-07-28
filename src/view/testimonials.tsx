import type React from "react";
import { useEffect, useState, useRef } from "react";
import { useGlobal } from '../context/GlobalContext';
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials: React.FC = () => {
    const { testimonialsContent, refs } = useGlobal();

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
            mirror: true,
        });

    }, []);

    const [category, setCategory] = useState<number>(1);

    return (
        <>
            {testimonialsContent.map((testimonial, id) => (
                <div key={id} ref={refs[testimonial.id]} className="mx-auto max-w-6xl px-4 sm:px-6">

                    <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
                        <div className="mx-auto max-w-3xl pb-12 text-center">
                            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                                {testimonial.title}
                            </h2>
                            <p className="text-lg text-indigo-200/65">
                                {testimonial.desc}
                            </p>
                        </div>
                        <div>
                            <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
                                <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
                                    {testimonial.tabs.map((tab, id1) => (
                                        <button key={id1}
                                            className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === tab.categories ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                                            // aria-pressed={category === tab.categories}
                                            onClick={() => setCategory(tab.categories)}
                                        >
                                            <svg
                                                className={`fill-current ${category === tab.categories ? "text-indigo-500" : "text-gray-600"}`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height={16}
                                            >
                                                {tab.icon}
                                            </svg>
                                            <span>{tab.text}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div
                                className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
                            // ref={masonryContainer}
                            >
                                {testimonial.contents.map((content, id2) => (
                                    <div key={id2} className="group h-full ">
                                        <article
                                            className={`h-full flex flex-col justify-between  relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ${!content.categories.includes(category) ? "opacity-30" : ""}`}
                                        >
                                            <div className="flex flex-col gap-4 h-full">
                                                <div>
                                                    <img src={content.clientImg} height={36} alt="Client logo" />
                                                </div>
                                                <p className="h-full text-indigo-200/65 before:content-['“'] after:content-['”']">
                                                    {content.content}
                                                </p>
                                                <div className="flex items-center gap-3 ">
                                                    <img
                                                        className="inline-flex shrink-0 rounded-full"
                                                        src={content.img}
                                                        width={36}
                                                        height={36}
                                                        alt={content.name}
                                                    />
                                                    <div className="text-sm font-medium text-gray-200">
                                                        <span>{content.name}</span>
                                                        <span className="text-gray-700"> - </span>
                                                        <a
                                                            className="text-indigo-200/65 transition-colors hover:text-indigo-500"
                                                            href="#0"
                                                        >
                                                            {content.company}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </>

    )
}

export default Testimonials