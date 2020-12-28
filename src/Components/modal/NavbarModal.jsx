import React from 'react';
import ReactDOM from 'react-dom';

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
										<a
											href='#home'
											className="navbar-item"
											onClick={onClose}
										>
											<p className="navbar-content">Inicio</p>
											<i className="fas fa-home fa-lg navbar-icon"></i>
										</a>
									</div>
								</li>
								<li>
									<div>
										<a
											href='#about-us'
											className="navbar-item"
											onClick={onClose}
										>
											<p className="navbar-content">Acerca de...</p>
											<i className="fas fa-phone fa-lg navbar-icon"></i>
										</a>
									</div>
								</li>
								<li>
									<div>
										<a
											href='#service'
											className="navbar-item"
											onClick={onClose}
										>
											<p className="navbar-content">Servicios</p>
											<i className="fas fa-shopping-cart fa-lg navbar-icon"></i>
										</a>
									</div>
								</li>
								<li>
									<div>
										<a
											href='#service'
											className="navbar-item"
											onClick={onClose}
										>
											<p className="navbar-content">Contacto</p>
											<i className="fas fa-user-astronaut fa-lg navbar-icon"></i>
										</a>
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