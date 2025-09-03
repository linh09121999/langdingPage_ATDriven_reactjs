import type React from "react";
import { useEffect} from "react";
import { useGlobal } from '../context/GlobalContext';
import AOS from "aos";
import "aos/dist/aos.css";

const Features: React.FC = () => {
    const { featuresContent, refs } = useGlobal();

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: false,
            mirror: true,
        });

    }, []);

    return (
        <>
            {featuresContent.map((feature, id) => (
                <section key={id} ref={refs[feature.id]}  className="relative">
                    <div
                        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
                        aria-hidden="true"
                    >
                        <img className="max-w-none"
                            src={feature.imgBlurredShapeGray}
                            width={760}
                            height={668}
                            alt="Blurred shape" />
                    </div>
                    <div
                        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
                        aria-hidden="true"
                    >
                        <img className="max-w-none"
                            src={feature.imgBlurredShape}
                            width={760}
                            height={668}
                            alt="Blurred shape" />
                    </div>
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">
                        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
                            <div data-aos="fade-up" className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
                                <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
                                    <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                                        {feature.text}
                                    </span>
                                </div>
                                <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                                    {feature.title}
                                </h2>
                                <p className="text-lg text-indigo-200/65">
                                    {feature.desc}
                                </p>
                            </div>
                            <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
                                <img className="max-w-none"
                                    src={feature.imgFeatures}
                                    width={1104}
                                    height={384}
                                    alt="Features" />
                            </div>
                            <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
                                {feature.content.map((content, id1) => (
                                    <article key={id1}>
                                        <svg
                                            className="mb-3 fill-indigo-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}>
                                            {content.icon}
                                        </svg>

                                        <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                                            {content.title}
                                        </h3>
                                        <p className="text-indigo-200/65">
                                            {content.desc}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    )
}

export default Features;