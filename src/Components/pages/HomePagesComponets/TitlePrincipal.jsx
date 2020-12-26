import '../../style/exepciones.css'
import React, { Fragment } from 'react';

const TitlePrincipal = () => {
    return (
        <Fragment>
            <header>
                <div className='title-background text-light'>
                    <div className='background'>
                        <h1 className='text-center title-principal '>LORDS OF TECHNOLOGY</h1>
                        <h2 className='text-center subtitle-principal '>hacemos lo que pidan</h2>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}

export default TitlePrincipal;