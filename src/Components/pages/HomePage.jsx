import React, { Fragment } from 'react';
import AboutUs from './HomePagesComponets/AboutUs';
import Services from './HomePagesComponets/Services';
import TitlePrincipal from './HomePagesComponets/TitlePrincipal';

const HomePage = () => {
    return (
        <Fragment>
            <TitlePrincipal />
            <main>
                <AboutUs />
                <Services />
            </main>
        </Fragment>
    );
}

export default HomePage;