import React, { Fragment } from 'react';
import Service from './ServiceComponents/Service';

const Services = () => {

	const services = [
		{
			id: 1,
			title: 'PAGINAS WEB',
			images: 'https://github.com/sga-programing-company/imagenes/blob/main/07-1920x1280.jpg?raw=true',
			seo: 'paginas web de g.y.p programing team',
			contenet: 'hacemos paginas web con diseños modernos ,atractivos bastante intuitivos para los cliente ',
			link: '/services/web-page'
		}, {
			id: 2,
			title: 'SITIO WEB',
			images: 'https://github.com/sga-programing-company/imagenes/blob/main/03-1920x1280.jpg?raw=true',
			seo: 'sitio web de g.y.p programing team',
			contenet: 'hacemos sitio web con tienda ,registro de usuarios , google analitycs, y cualquier cosas que nos pidas',
			link: '/services/website'
		}, {
			id: 3,
			title: 'APLICACIONES MOVILES',
			images: 'https://github.com/sga-programing-company/imagenes/blob/main/04-1920x1280.jpg?raw=true',
			seo: 'aplicaciones moviles de g.y.p programing team',
			contenet: 'creamos aplicaciones moviles intuitivas y fasiles de utilizar para distintos tipos de usuarios',
			link: '/services/mobile-application'
		}, {
			id: 4,
			title: 'SOPORTE PARA TUS PAGINAS WEB',
			images: 'https://github.com/sga-programing-company/imagenes/blob/main/02-1920x1280.jpg?raw=true',
			seo: 'soporte de webs de g.y.p programing team',
			contenet: 'actualizamos y mejoramos tus paginas web cuando tu deses y solucionado errores previos ',
			link: '/services/support'
		}
	]
	return (
		<Fragment>
			<section id='service' className='services-container text-light'>
				<h2 className='services-title'>NUESTROS SERVICIOS</h2>
				{
					services.map((s) => (
						<Service key={s.id} title={s.title} img={s.images} seo={s.seo} content={s.contenet} link={s.link} />
					))
				}
			</section>
		</Fragment>
	);
}

export default Services;