import type React from "react";
import { useGlobal } from '../context/GlobalContext';

const PageIllustration: React.FC = (
    {
        multiple = false,
    }: {
        multiple?: boolean;
    }
) => {
    const { illustrationContent } = useGlobal();

    return (
        <>
            {illustrationContent.map((illustration, index) => (
                <>
                    <div
                        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/4"
                        aria-hidden="true"
                    >
                        <img className="max-w-none"
                            src={illustration.img1}
                            width={846}
                            height={594}
                            alt="Page illustration" />
                    </div>
                    {multiple && (
                        <>
                            <div
                                className="pointer-events-none absolute left-1/2 top-[400px] -z-10 -mt-20 -translate-x-full opacity-50"
                                aria-hidden="true"
                            >
                                <img
                                    className="max-w-none"
                                    src={illustration.img2}
                                    width={760}
                                    height={668}
                                    alt="Blurred shape"
                                />
                            </div>
                            <div
                                className="pointer-events-none absolute left-1/2 top-[440px] -z-10 -translate-x-1/3"
                                aria-hidden="true"
                            >
                                <img
                                    className="max-w-none"
                                    src={illustration.img3}
                                    width={760}
                                    height={668}
                                    alt="Blurred shape"
                                />
                            </div>
                        </>
                    )}
                </>
            ))
            }
        </>
    )
}

export default PageIllustration;