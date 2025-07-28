import type React from "react";
import { useEffect, useState, useRef } from "react";
import { useGlobal } from '../context/GlobalContext';
import { Dialog, DialogContent } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroHome: React.FC = () => {
    const { hero, refs} = useGlobal();

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
            mirror: true,
        });

    }, []);

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return (
        <>
            {hero.map((hero, id) => (
                <section key={id} ref={refs[hero.id]}>
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">

                        <div  className="py-12 md:py-20">
                            <div className="pb-12 text-center md:pb-20">
                                <h1
                                    className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                                    data-aos="fade-up"
                                >
                                    {hero.title}
                                </h1>
                                <div className="mx-auto max-w-3xl">
                                    <p
                                        className="mb-8 text-xl text-indigo-200/65"
                                        data-aos="fade-up"
                                        data-aos-delay={200}
                                    >
                                        {hero.desc}
                                    </p>
                                    <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                                        <div data-aos="fade-up" data-aos-delay={400}>
                                            <a
                                                className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                                                href="#0"
                                            >
                                                <span className="relative inline-flex items-center">
                                                    {hero.button1}
                                                    <span className=" ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                                                        {hero.icon}
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                        <div data-aos="fade-up" data-aos-delay={600}>
                                            <a
                                                className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                                                href="#0"
                                            >
                                                {hero.button2}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div
                                    className="pointer-events-none absolute bottom-8 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2"
                                    aria-hidden="true"
                                >
                                    <img className="md:max-w-none"
                                        src={hero.SecondaryIllustration}
                                        width={1165}
                                        height={1012}
                                        alt="Secondary illustration" />
                                </div>
                                <button
                                    className="group relative flex items-center justify-center rounded-2xl focus:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200"
                                    onClick={() => {
                                        setModalOpen(true);
                                    }}
                                    aria-label="Watch the video"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                >
                                    <figure className="relative overflow-hidden rounded-2xl before:absolute before:inset-0 before:-z-10 before:bg-linear-to-br before:from-gray-900 before:via-indigo-500/20 before:to-gray-900">
                                        <img
                                            className="opacity-50 grayscale"
                                            src={hero.img}
                                            width={1104}
                                            height={576}
                                            alt="Modal video thumbnail"
                                        />
                                    </figure>
                                    <span className="pointer-events-none absolute p-2.5 before:absolute before:inset-0 before:rounded-full before:bg-gray-950 before:duration-300 group-hover:before:scale-110">
                                        <span className="relative flex items-center gap-3">
                                            {hero.iconPlay}
                                            <span className="text-sm font-medium leading-tight text-gray-300">
                                                {hero.btnVideo}
                                                <span className="text-gray-600"> - </span>
                                                {hero.time}
                                            </span>
                                        </span>
                                    </span>
                                </button>
                                <Dialog
                                    open={modalOpen}
                                    onClose={() => setModalOpen(false)}
                                >
                                    <DialogContent sx={{ padding: 0, maxWidth: 'auto' }}>
                                        {/* <div className="fixed inset-0 z-99999 flex px-4 py-6 sm:px-6"> */}
                                        <div className="mx-auto flex max-w-6xl items-center">
                                            <video
                                                src={hero.video}
                                                width={1920}
                                                height={1080}
                                                controls
                                                autoPlay
                                            />
                                        </div>
                                        {/* </div> */}
                                    </DialogContent>

                                </Dialog>
                            </div>
                        </div>

                    </div>
                </section>
            ))}
        </>

    )
}

export default HeroHome;