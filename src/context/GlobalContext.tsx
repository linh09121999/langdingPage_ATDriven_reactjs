import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import type { JSX, ReactNode } from "react";

import imgLogo from "../assets/images/logo.svg"
import imgFooter from "../assets/images/footer-illustration.svg"

import Illustration from "../assets/images/page-illustration.svg"
import BlurredShapeGray from "../assets/images/blurred-shape-gray.svg";
import BlurredShape from "../assets/images/blurred-shape.svg";

import VideoThumb from "../assets/images/hero-image-01.jpg";

import Video from "../assets/videos/video.mp4";

import WorflowImg01 from "../assets/images/workflow-01.png";
import WorflowImg02 from "../assets/images/workflow-02.png";
import WorflowImg03 from "../assets/images/workflow-03.png";

import imgSecondaryIllustration from "../assets/images/secondary-illustration.svg";

import FeaturesImage from "../assets/images/features.png";

import TestimonialImg01 from "../assets/images/testimonial-01.jpg";
import TestimonialImg02 from "../assets/images/testimonial-02.jpg";
import TestimonialImg03 from "../assets/images/testimonial-03.jpg";
import TestimonialImg04 from "../assets/images/testimonial-04.jpg";
import TestimonialImg05 from "../assets/images/testimonial-05.jpg";
import TestimonialImg06 from "../assets/images/testimonial-06.jpg";
import TestimonialImg07 from "../assets/images/testimonial-07.jpg";
import TestimonialImg08 from "../assets/images/testimonial-08.jpg";
import TestimonialImg09 from "../assets/images/testimonial-09.jpg";
import ClientImg01 from "../assets/images/client-logo-01.svg";
import ClientImg02 from "../assets/images/client-logo-02.svg";
import ClientImg03 from "../assets/images/client-logo-03.svg";
import ClientImg04 from "../assets/images/client-logo-04.svg";
import ClientImg05 from "../assets/images/client-logo-05.svg";
import ClientImg06 from "../assets/images/client-logo-06.svg";
import ClientImg07 from "../assets/images/client-logo-07.svg";
import ClientImg08 from "../assets/images/client-logo-08.svg";
import ClientImg09 from "../assets/images/client-logo-09.svg";


import {
    FaGithub,
    FaMedium,
    FaPlayCircle
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrFormNextLink } from "react-icons/gr";

export interface Page {
    id: string;
    title: string;
}

const defaultPages: Page[] = [
    {
        id: "home",
        title: "Home"
    },
    {
        id: "product",
        title: "Products"
    },
    {
        id: "feature",
        title: "Features"
    },
    {
        id: "testimontial",
        title: "Testimonials"
    },
    {
        id: "contact",
        title: "Contact"
    },
];

export interface Footer {
    img: string,
    text1: string,
    text2: string,
    social: socialFooter[];
    product: productFooter[];
    conpany: companyFooter[];
    resources: resourcesFooter[];
    contentLibrary: contentLibraryFooter[];
}

export interface socialFooter {
    link: string,
    title: string,
    icon: JSX.Element
}

const defaultSocialFooter: socialFooter[] = [
    {
        link: "",
        title: "Twitter",
        icon: <FaXTwitter className="h-6 w-6 fill-current" />
    },
    {
        link: "",
        title: "Medium",
        icon: <FaMedium className="h-6 w-6 fill-current" />
    },
    {
        link: "",
        title: "Github",
        icon: <FaGithub className="h-6 w-6 fill-current" />
    },
]

export interface productFooter {
    name: string;
    content: string[];
}

const defaultpRroductFooter: productFooter[] = [
    {
        name: "Product",
        content: [
            "Features",
            "Integrations",
            "Pricing & Plans",
            "Changelog",
            "Our method",
            "User policy"
        ]
    }
]

export interface companyFooter {
    name: string;
    content: string[];
}

const defaultCompanyFooter: companyFooter[] = [
    {
        name: "Company",
        content: [
            "About us",
            "Diversity & Inclusion",
            "Blog",
            "Careers",
            "Financial statements"
        ]
    }
]

export interface resourcesFooter {
    name: string;
    content: string[];
}

const defaultResourcesFooter: resourcesFooter[] = [
    {
        name: "Resources",
        content: [
            "Community",
            "Terms of service",
            "Report a vulnerability"
        ]
    }
]

export interface contentLibraryFooter {
    name: string;
    content: string[];
}


const defaultContentLibraryFooter: contentLibraryFooter[] = [
    {
        name: "Content Library",
        content: [
            "Templates",
            "Tutorials",
            "Knowledge base",
            "Learn",
            "Cookie manager"
        ]
    }
]


const defaultFooter: Footer[] = [
    {
        img: imgFooter,
        text1: "© Cruip.com",
        text2: "Terms",
        social: defaultSocialFooter,
        product: defaultpRroductFooter,
        conpany: defaultCompanyFooter,
        resources: defaultResourcesFooter,
        contentLibrary: defaultContentLibraryFooter
    }
]


export interface PageIllustration {
    img1: string;
    img2: string;
    img3: string;
}

const defaultPageIllustration: PageIllustration[] = [
    {
        img1: Illustration,
        img2: BlurredShapeGray,
        img3: BlurredShape,
    }
]

export interface HeroContent {
    id: string,
    title: string;
    desc: string;
    button1: string;
    button2: string;
    img: string;
    video: string;
    icon: JSX.Element;
    SecondaryIllustration: string;
    iconPlay: JSX.Element;
    btnVideo: string;
    time: string
}

const defaultHero: HeroContent[] = [
    {
        id: "home",
        title: "AI-driven tools for product teams",
        desc: "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.",
        button1: "Start Building",
        button2: "Schedule Demo",
        img: VideoThumb,
        video: Video,
        icon: <GrFormNextLink />,
        SecondaryIllustration: imgSecondaryIllustration,
        iconPlay: <FaPlayCircle className="fill-current" />,
        btnVideo: "Watch Demo",
        time: "3:47"
    }
]

export interface Workflows {
    id: string,
    text: string;
    title: string;
    desc: string;
    content: ContentWorkFlow[];
}

export interface ContentWorkFlow {
    icon: JSX.Element;
    img: string;
    titleContent: string;
    descContent: string
}

const defaultWorkflowsContent: ContentWorkFlow[] = [
    {
        icon: <GrFormNextLink />,
        img: WorflowImg01,
        titleContent: "Built-in Tools",
        descContent: "Streamline the product development flow with a content platform that's aligned across specs and insights."
    },
    {
        icon: <GrFormNextLink />,
        img: WorflowImg02,
        titleContent: "Scale Instantly",
        descContent: "Streamline the product development flow with a content platform that's aligned across specs and insights."
    },
    {
        icon: <GrFormNextLink />,
        img: WorflowImg03,
        titleContent: "Tailored Flows",
        descContent: "Streamline the product development flow with a content platform that's aligned across specs and insights."
    }
]

const defaultWorkflow: Workflows[] = [
    {
        id: "product",
        text: "Tailored Workflows",
        title: "Map your product journey",
        desc: "Simple and elegant interface to start collaborating with your team in minutes. It seamlessly integrates with your code and your favorite programming languages.",
        content: defaultWorkflowsContent
    }
]

export interface ContentFeatures {
    icon: JSX.Element;
    title: string;
    desc: string;
}

const defaultContentFeatures: ContentFeatures[] = [
    {
        icon: <>
            <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
            <path fill-opacity=".48" d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z" />
        </>,
        title: "Project Milestones",
        desc: "Track progress across custom flows for your team. Find the right balance for the user, privacy and security."
    },
    {
        icon: <
            >
            <path fillOpacity=".48" d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z" />
            <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
        </>,
        title: "Team Views",
        desc: "Track progress across custom flows for your team. Find the right balance for the user, privacy and security."
    },
    {
        icon: <>
            <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
            <path
                fillOpacity=".48"
                d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
            />
        </>,
        title: "Advanced Search",
        desc: "Track progress across custom flows for your team. Find the right balance for the user, privacy and security."
    },
    {
        icon: <>
            <path
                fillOpacity=".48"
                d="m3.031 9.05-.593-.805 1.609-1.187.594.804a6.966 6.966 0 0 1 0 8.276l-.594.805-1.61-1.188.594-.805a4.966 4.966 0 0 0 0-5.9Z"
            />
            <path d="m7.456 6.676-.535-.845 1.69-1.07.534.844a11.944 11.944 0 0 1 0 12.789l-.535.845-1.69-1.071.536-.845a9.944 9.944 0 0 0 0-10.647Z" />
            <path
                d="m11.888 4.35-.514-.858 1.717-1.027.513.858a16.9 16.9 0 0 1 2.4 8.677 16.9 16.9 0 0 1-2.4 8.676l-.513.859-1.717-1.028.514-.858A14.9 14.9 0 0 0 14.003 12a14.9 14.9 0 0 0-2.115-7.65Z"
                opacity=".48"
            />
            <path d="m16.321 2-.5-.866 1.733-1 .5.866A22 22 0 0 1 21 12c0 3.852-1.017 7.636-2.948 10.97l-.502.865-1.73-1.003.501-.865A19.878 19.878 0 0 0 19 12a20 20 0 0 0-2.679-10Z" />
        </>,
        title: "Strategic Initiatives",
        desc: "Track progress across custom flows for your team. Find the right balance for the user, privacy and security."
    },
    {
        icon: <>
            <path
                fillOpacity=".48"
                d="M12 8.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
            />
            <path d="m7.454 2.891.891-.454L7.437.655l-.891.454a12 12 0 0 0 0 21.382l.89.454.91-1.781-.892-.455a10 10 0 0 1 0-17.818ZM17.456 1.11l-.891-.454-.909 1.782.891.454a10 10 0 0 1 0 17.819l-.89.454.908 1.781.89-.454a12 12 0 0 0 0-21.382Z" />
        </>,
        title: "Flexible Workflows",
        desc: "Track progress across custom flows for your team. Find the right balance for the user, privacy and security."
    },
    {
        icon: <>
            <path
                fillOpacity=".48"
                d="M19 8h5v2h-5V8Zm-4 5h9v2h-9v-2Zm9 5H11v2h13v-2Z"
            />
            <path d="M19.406 3.844 6.083 20.497.586 15 2 13.586l3.917 3.917L17.844 2.595l1.562 1.25Z" />
        </>,
        title: "Unified Timeline",
        desc: "Track progress across custom flows for your team. Find the right balance for the user, privacy and security."
    }
]

export interface Features {
    id: string,
    text: string;
    title: string;
    desc: string;
    imgBlurredShapeGray: string;
    imgBlurredShape: string;
    imgFeatures: string;
    content: ContentFeatures[];
}

const defaultFeatures: Features[] = [
    {
        id: "feature",
        text: "Advanced Controls",
        title: "Built for modern product teams",
        desc: "Open AI reads and understands your files, and with nothing more than a single line of feedback, so you can go further than the speed of thought.",
        imgBlurredShapeGray: BlurredShapeGray,
        imgBlurredShape: BlurredShape,
        imgFeatures: FeaturesImage,
        content: defaultContentFeatures
    }
]

export interface TabTestimonials {
    text: string;
    icon: JSX.Element,
    categories: number,
}

const defaultTabTestimonials: TabTestimonials[] = [
    {
        text: "View All",
        icon: <path d="M.062 10.003a1 1 0 0 1 1.947.455c-.019.08.01.152.078.19l5.83 3.333c.052.03.115.03.168 0l5.83-3.333a.163.163 0 0 0 .078-.188 1 1 0 0 1 1.947-.459 2.161 2.161 0 0 1-1.032 2.384l-5.83 3.331a2.168 2.168 0 0 1-2.154 0l-5.83-3.331a2.162 2.162 0 0 1-1.032-2.382Zm7.854-7.981-5.83 3.332a.17.17 0 0 0 0 .295l5.828 3.33c.054.031.118.031.17.002l5.83-3.333a.17.17 0 0 0 0-.294L8.085 2.023a.172.172 0 0 0-.17-.001ZM9.076.285l5.83 3.332c1.458.833 1.458 2.935 0 3.768l-5.83 3.333c-.667.38-1.485.38-2.153-.001l-5.83-3.332c-1.457-.833-1.457-2.935 0-3.767L6.925.285a2.173 2.173 0 0 1 2.15 0Z" />,
        categories: 1
    },
    {
        text: "Web Apps",
        icon: <path d="M6.5 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM9 6.855A3.502 3.502 0 0 0 8 0a3.5 3.5 0 0 0-1 6.855v1.656L5.534 9.65a3.5 3.5 0 1 0 1.229 1.578L8 10.267l1.238.962a3.5 3.5 0 1 0 1.229-1.578L9 8.511V6.855Zm2.303 4.74c.005-.005.01-.01.013-.016l.012-.016a1.5 1.5 0 1 1-.025.032ZM3.5 11A1.497 1.497 0 0 1 5 12.5 1.5 1.5 0 1 1 3.5 11Z" />,
        categories: 2
    },
    {
        text: "eCommerce",
        icon: <path d="M2.428 10c.665-1.815 1.98-3.604 3.44-4.802-.6-1.807-1.443-3.079-2.29-3.18-1.91-.227-2.246 2.04-.174 2.962a1 1 0 1 1-.813 1.827C-1.407 5.028-.589-.491 3.815.032c1.605.191 2.925 1.811 3.79 4.07.979-.427 1.937-.51 2.735-.092.818.429 1.143 1.123 1.294 2.148.015.1.022.149.043.32.542-.537 1.003-.797 1.693-.622.64.162.894.493 1.195 1.147l.018.04a1 1 0 0 1 1.133 1.61c-.46.47-1.12.574-1.744.398a1.661 1.661 0 0 1-.87-.592 2.127 2.127 0 0 1-.224-.349 3.225 3.225 0 0 1-.55.477c-.377.253-.8.368-1.259.267-.993-.218-1.21-.779-1.367-2.05-.027-.22-.033-.262-.046-.353-.067-.452-.144-.617-.244-.67-.225-.118-.665-.013-1.206.278.297 1.243.475 2.587.516 3.941H15a1 1 0 0 1 0 2H8.68l-.025.285c-.173 1.918-.906 3.381-2.654 3.668-1.5.246-3.013-.47-3.677-1.858-.29-.637-.39-1.35-.342-2.095H1a1 1 0 0 1 0-2h1.428Zm2.11 0h2.175a18.602 18.602 0 0 0-.284-2.577c-.205.202-.408.42-.606.654A9.596 9.596 0 0 0 4.537 10Zm2.135 2H3.942c-.032.465.03.888.194 1.25.258.538.89.836 1.54.73.546-.09.888-.772.988-1.875L6.673 12Z" />,
        categories: 3
    },
    {
        text: "Enteprise",
        icon: <path d="M3.757 3.758a6 6 0 0 1 8.485 8.485 5.992 5.992 0 0 1-5.301 1.664 1 1 0 1 0-.351 1.969 8 8 0 1 0-4.247-2.218 1 1 0 0 0 1.415-.001L9.12 8.294v1.827a1 1 0 1 0 2 0v-4.2a.997.997 0 0 0-1-1.042H5.879a1 1 0 1 0 0 2h1.829l-4.599 4.598a6 6 0 0 1 .648-7.719Z" />,
        categories: 4
    },
    {
        text: "Expen",
        icon: <path d="M13.95.879a3 3 0 0 0-4.243 0L1.293 9.293a1 1 0 0 0-.274.51l-1 5a1 1 0 0 0 1.177 1.177l5-1a1 1 0 0 0 .511-.273l1.16-1.16a1 1 0 0 0-1.414-1.414l-.946.946-3.232.646.646-3.232 8.2-8.2a1 1 0 0 1 1.414 0l1.172 1.172a1 1 0 0 1 0 1.414l-.55.549a1 1 0 0 0 1.415 1.414l.55-.55a3 3 0 0 0 0-4.241L13.948.879ZM3.25 4.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm11.474 6.029-1.521-.752-.752-1.521c-.168-.341-.73-.341-.896 0l-.752 1.52-1.521.753a.498.498 0 0 0 0 .896l1.52.752.753 1.52a.5.5 0 0 0 .896 0l.752-1.52 1.52-.752a.498.498 0 0 0 0-.896Z" />,
        categories: 5
    }

]

export interface ContentTestimonials {
    img: string,
    clientImg: string,
    name: string,
    company: string,
    content: string,
    categories: number[],
}

const defaultContentTestimonials: ContentTestimonials[] = [
    {
        img: TestimonialImg01,
        clientImg: ClientImg01,
        name: "MaKayla P.",
        company: "Disney",
        content:
            "As a content creator, I was always on the lookout for a tool that could help me keep up with the demand. The AI-driven content tool has been a game-changer. It generates high-quality content in a fraction of the time it used to take me.",
        categories: [1, 3, 5],
    },
    {
        img: TestimonialImg02,
        clientImg: ClientImg02,
        name: "Andrew K.",
        company: "Samsung",
        content:
            "I've tried several content generation tools, but this AI-driven tool is by far the best. It understands my brand's voice and consistently produces content that resonates with my audience!",
        categories: [1, 2, 4],
    },
    {
        img: TestimonialImg03,
        clientImg: ClientImg03,
        name: "Lucy D.",
        company: "Rio",
        content:
            "Content creation used to be a bottleneck in our workflow, but not anymore. This AI tool is intuitive and produces top-notch content every time. It's like having an extra team member who never sleeps! Definitely recommend.",
        categories: [1, 2, 5],
    },
    {
        img: TestimonialImg04,
        clientImg: ClientImg04,
        name: "Pavel M.",
        company: "Canon",
        content:
            "The quality of the content generated by this AI tool is outstanding. It has taken our content marketing to new heights, allowing us to publish more frequently without compromising on quality. Highly recommended for anyone.",
        categories: [1, 4],
    },
    {
        img: TestimonialImg05,
        clientImg: ClientImg05,
        name: "Miriam E.",
        company: "Cadbury",
        content:
            "The AI-driven content tool has been a lifesaver for my marketing agency. We can now produce high-quality content for multiple clients quickly and efficiently. It's an invaluable asset to our team.",
        categories: [1, 3, 5],
    },
    {
        img: TestimonialImg06,
        clientImg: ClientImg06,
        name: "Eloise V.",
        company: "Maffell",
        content:
            "I'm amazed at how well this AI-driven content tool performs. It's incredibly versatile and can generate content for blogs, social media, and even product descriptions effortlessly. It's fantastic!",
        categories: [1, 3],
    },
    {
        img: TestimonialImg07,
        clientImg: ClientImg07,
        name: "Pierre-Gilles L.",
        company: "Binance",
        content:
            "I was blown away by how easy it was to create my content using this tool! Within a few hours, I had a professional-looking platform up and running, and my client could not believe it.",
        categories: [1, 2, 5],
    },
    {
        img: TestimonialImg08,
        clientImg: ClientImg08,
        name: "Danielle K.",
        company: "Forbes Inc.",
        content:
            "I've never been a fan of complicated website AI tools, which is why Open PRO is perfect for me. Its minimalist design and simple functionality make staying organized feel like second nature.",
        categories: [1, 4],
    },
    {
        img: TestimonialImg09,
        clientImg: ClientImg09,
        name: "Mary P.",
        company: "Ray Ban",
        content:
            "I've never been one for coding, so finding an AI tool that doesn't require any technical skills was a dream come true. This tool exceeded my expectations, and I'm proud to show off my new stuff to friends.",
        categories: [1, 2],
    },
]

export interface Testimonials {
    id: string,
    title: string,
    desc: string,
    tabs: TabTestimonials[],
    contents: ContentTestimonials[],
}

const defaultTestimonials: Testimonials[] = [
    {
        id: "testimontial",
        title: "Don't take our word for it",
        desc: "We provide tech-first solutions that empower decision-makers to build healthier and happier workspaces from anywhere in the world.",
        tabs: defaultTabTestimonials,
        contents: defaultContentTestimonials,
    }
]

export interface CTA {
    id: string,
    title: string,
    btn1: string,
    btn2: string,
    img: string,
    icon: JSX.Element
}

const defaultCTA: CTA[] = [
    {
        id: "contact",
        title: "Join the content-first platform",
        btn1: "Start Building",
        btn2: "Schedule Demo",
        img: BlurredShape,
        icon: <GrFormNextLink />
    }
]

// export type SectionKey =
//     | "home"
//     | "product"
//     | "feature"
//     | "testimontial"
//     | "contact";

export interface GlobalState {
    pages: Page[];
    currentPage: string;
    setCurrentPage: (id: string) => void;
    nameLogo: string,
    logo: string;
    footerContent: Footer[];
    illustrationContent: PageIllustration[];
    hero: HeroContent[],
    workflowsContent: Workflows[];
    featuresContent: Features[];
    testimonialsContent: Testimonials[],
    ctaContent: CTA[];
    refs: Record<string, React.RefObject<HTMLDivElement | null>>;
    selectNav: number;
    setSelectNav: (index: number) => void;
    scrollTo: (id: string) => void;
    offset: number
}


const GlobalContext = createContext<GlobalState | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {

    const [currentPage, setCurrentPage] = useState<string>("home");

    const logo = imgLogo

    const refs: Record<string, React.RefObject<HTMLDivElement | null>> = {};
    defaultPages.forEach((page) => {
        refs[page.id] = useRef<HTMLDivElement | null>(null);
    });

    const offset = 70;

    const [selectNav, setSelectNav] = useState<number>(0);

    const scrollTo = (id: string) => {
        const element = refs[id]?.current;
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            defaultPages.forEach((page, index) => {
                const el = refs[page.id]?.current;
                if (!el) return;

                const offsetTop = el.offsetTop;
                const offsetHeight = el.offsetHeight;

                if (
                    scrollY >= offsetTop - offset &&
                    scrollY < offsetTop + offsetHeight - offset
                ) {
                    setSelectNav(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [refs]);

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             for (let entry of entries) {
    //                 if (entry.isIntersecting) {
    //                     const index = defaultPages.findIndex((p) => p.id === entry.target.id);
    //                     if (index !== -1) {
    //                         setSelectNav(index);
    //                     }
    //                     break;
    //                 }
    //             }
    //         },
    //         {
    //             threshold: 0.6, // phần lớn section phải xuất hiện mới active
    //         }
    //     );

    //     // Observe từng section
    //     defaultPages.forEach((page) => {
    //         const el = refs[page.id]?.current;
    //         if (el) observer.observe(el);
    //     });

    //     return () => {
    //         observer.disconnect();
    //     };
    // }, [refs]);


    const value = {
        pages: defaultPages,
        currentPage,
        setCurrentPage,
        nameLogo: "AIDriven",
        logo,
        footerContent: defaultFooter,
        illustrationContent: defaultPageIllustration,
        hero: defaultHero,
        workflowsContent: defaultWorkflow,
        featuresContent: defaultFeatures,
        testimonialsContent: defaultTestimonials,
        ctaContent: defaultCTA,
        selectNav,
        setSelectNav,
        refs,
        scrollTo,
        offset
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

// Custom hook for convenience
export const useGlobal = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobal must be used within a GlobalProvider");
    }
    return context;
};