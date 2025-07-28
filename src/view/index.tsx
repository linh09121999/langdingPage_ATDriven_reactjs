import React from "react";

import PageIllustration from './page-illustration';
import HeroHome from './hero-home';
import Workflows from './workflows';
import Features from './features';
import Testimonials from './testimonials';
import Cta from './cta';

const Home: React.FC = () => {

    return (
        <>
            <PageIllustration />
            <HeroHome />
            <Workflows />
            <Features />
            <Testimonials />
            <Cta />
        </>
    )
}

export default Home;