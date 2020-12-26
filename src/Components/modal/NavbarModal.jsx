import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const NavbarModal = ({ onOpen, onClose }) => {
	return (
		<div>
			{
				onOpen
					? ReactDOM.createPortal(
						<div className='border-top'>
							<ul className="navbar-list">
								<li>
									<div>
										<Link to='/' className="navbar-item">
											<p className="navbar-content">Inicio</p>
											<i className="fas fa-home fa-lg navbar-icon"></i>
										</Link>
									</div>
								</li>
								<li>
									<div>
										<Link to='/product' className="navbar-item">
											<p className="navbar-content">Productos</p>
											<i className="fas fa-shopping-cart fa-lg navbar-icon"></i>
										</Link>
									</div>
								</li>
								<li>
									<div>
										<Link to='/contact' className="navbar-item">
											<p className="navbar-content">Contacto</p>
											<i className="fas fa-user-astronaut fa-lg navbar-icon"></i>
										</Link>
									</div>
								</li>
							</ul>
						</div>
						,
						document.getElementById('navbar-container')
					)
					:
					null
			}
		</div>
	);
}

export default NavbarModal;