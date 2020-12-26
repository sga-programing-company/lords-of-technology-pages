import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

const Service = ({ title, img, seo, content, link }) => {
    return (
        <Fragment>
            <article className='services-body'>
                <h3 className='services-title-b'>{title}</h3>
                <figure>
                    <img src={img} alt={seo} />
                    <figcaption>
                        <p>{content}</p>
                    </figcaption>
                </figure>
                <div>
                    <Link to={link}>
                        <button className='btn btn-primary btn-center'>
                            Ver Más
                        </button>
                    </Link>
                </div>
            </article>
        </Fragment>
    );
}

export default Service;
