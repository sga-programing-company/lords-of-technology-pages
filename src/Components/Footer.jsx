import React, { Fragment } from 'react';

const Footer = () => {
	return (
		<Fragment>
			<footer>
				<svg className='wave-bottom-primary' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path fillOpacity="1" d="M0,256L40,240C80,224,160,192,240,197.3C320,203,400,245,480,229.3C560,213,640,139,720,138.7C800,139,880,213,960,245.3C1040,277,1120,267,1200,245.3C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
				</svg>
				<div className='f-body bg-primary'>

					<a className='f-item text-none text-dark' href="whatsapp://send?text=Hola, Index.pe&phone=+57 319 3054761&abid=+57 319 3054761">
						<i className="fab fa-whatsapp-square fa-lg f-icon"></i>
						<p className='f-content'>+57 319 3054761</p>
					</a>

					<a className='f-item text-none text-dark' href="whatsapp://send?text=Hola, Index.pe&phone=+57 314 2350353&abid=+57 314 2350353">
						<i className="fab fa-whatsapp-square fa-lg f-icon"></i>
						<p className='f-content'>+57 314 2350353</p>
					</a>

					<a className='f-item text-none text-dark' href='https://www.facebook.com' target='_blanck'>
						<i className="fab fa-facebook-square fa-lg f-icon"></i>
						<p className='f-content'>facebook</p>
					</a>

					<a className='f-item text-none text-dark' href='https://www.instagram.com' target='_blanck'>
						<i className="fab fa-instagram-square fa-lg f-icon"></i>
						<p className='f-content'>instagram</p>
					</a>

					<a className='f-item text-none text-dark' href='mailto:prueba@gmail.com'>
						<i className="fas fa-envelope-square fa-lg f-icon"></i>
						<p className='f-content'>prueba@gmail.com</p>
					</a>

				</div>
			</footer>
		</Fragment >
	);
}

export default Footer;  