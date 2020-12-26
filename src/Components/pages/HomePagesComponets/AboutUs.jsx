import React, { Fragment } from 'react';

const AboutUs = () => {
	return (
		<Fragment>
			<section>
				<article>
					<div className='bg-tertiary'>
						<h2 className='text-center pt-6 pb-6'>QUIENES SOMOS</h2>
						<p className='text-center p-6 p-top'>
							somos un equipo de programadores que quiere
							ayudar a las empresas a modernizarse y llevarlas
							al progreso, por eso hemos diseñado unas
							estrategias de marketin digital para aumenta las
							ventas tanto virtuales como fisicas
						</p>
					</div>
					<svg className='wave-top-tertiary' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
						<path fillOpacity="1" d="M0,256L40,240C80,224,160,192,240,197.3C320,203,400,245,480,229.3C560,213,640,139,720,138.7C800,139,880,213,960,245.3C1040,277,1120,267,1200,245.3C1280,224,1360,192,1400,176L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
					</svg>
				</article>
			</section>
		</Fragment>
	);
}

export default AboutUs;