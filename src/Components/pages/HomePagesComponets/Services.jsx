import React, { Fragment } from 'react';
import Service from './ServiceComponents/Service';

const Services = () => {

	const service = [
		{
			title: 'PAGINAS WEB',
			images: 'https://github.com/sga-programing-company/imagenes/blob/main/03-1920x1280.jpg?raw=true',
			seo: 'paginas web - g.y.p programing team',
			contenet: 'hacemos paginas web con diseños modernos ,atractivos bastante intuitivos para los cliente ',
			link: '/services/paginas_web'
		}, {
			title: 'APLICACIONES MOVILES',
			images: 'https://github.com/sga-programing-company/imagenes/blob/main/04-1920x1280.jpg?raw=true',
			seo: 'aplicaciones moviles - g.y.p programing team',
			contenet: 'creamos aplicaciones moviles intuitivas y fasiles de utilizar para distintos tipos de usuarios',
			link: '/services/aplicaciones_moviles'
		}, {
			title: 'SOPORTE PARA TUS PAGINAS WEB',
			images: 'https://github.com/sga-programing-company/imagenes/blob/main/02-1920x1280.jpg?raw=true',
			seo: 'soporte de webs - g.y.p programing team',
			contenet: 'actualizamos y mejoramos tus paginas web cuando tu deses y solucionado errores previos ',
			link: '/services/soporte'
		}
	]
	return (
		<Fragment>
			<section className='services-container text-light'>
				<h2 className='services-title'>NUESTROS SERVICIOS</h2>
				<Service title={service[0].title} img={service[0].images} seo={service[0].seo} content={service[0].contenet} link={service[0].link} />
				<Service title={service[1].title} img={service[1].images} seo={service[1].seo} content={service[1].contenet} link={service[1].link} />
				<Service title={service[2].title} img={service[2].images} seo={service[2].seo} content={service[2].contenet} link={service[2].link} />
			</section>
		</Fragment>
	);
}

export default Services;