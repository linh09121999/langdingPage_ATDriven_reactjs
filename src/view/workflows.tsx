import type React from "react";
import { useEffect, useState, useRef } from "react";
import { useGlobal } from '../context/GlobalContext';
import Spotlight from "./spotlight";

import AOS from "aos";
import "aos/dist/aos.css";

const Workflows: React.FC = () => {
    const { workflowsContent, refs} = useGlobal();

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
            mirror: true,
        });

    }, []);

    return (
        <>
            {workflowsContent.map((workflow, id) => (
                <section key={id} ref={refs[workflow.id]}>
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">

                        <div  className="pb-12 md:pb-20">
                            <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
                                <div data-aos="fade-up" className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
                                    <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                                        {workflow.text}
                                    </span>
                                </div>
                                <h2 data-aos="fade-up" className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                                    {workflow.title}
                                </h2>
                                <p data-aos="fade-up" className="text-lg text-indigo-200/65">
                                    {workflow.desc}
                                </p>


                            </div>
                            {/* spotlight */}
                            <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
                                {workflow.content.map((content, id1) => (
                                    <a key={id1}
                                        className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
                                        href="#0"
                                    >
                                        <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                                            <div
                                                className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                                                aria-hidden="true"
                                            >
                                                {content.icon}
                                            </div>
                                            <img className="inline-flex"
                                                src={content.img}
                                                width={350}
                                                height={288}
                                                alt={content.titleContent} />

                                            <div className="p-6">
                                                <div className="mb-3">
                                                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                                                        <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                                                            {content.titleContent}
                                                        </span>
                                                    </span>
                                                </div>
                                                <p className="text-indigo-200/65">
                                                    {content.descContent}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </Spotlight>
                        </div>

                    </div>
                </section>
            ))}
        </>


    )
}

export default Workflows;