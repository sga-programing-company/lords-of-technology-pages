import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import NavbarModal from './modal/NavbarModal';

const Navbar = () => {
	const [onOpen, setOpen] = useState(false);

	const open = () => {
		setOpen(true);
		document.body.classList.add('offScroll')
	}

	const close = () => {
		setOpen(false);
		if (document.body.classList.value === "offScroll") {
			document.body.classList.remove('offScroll')
		}
	}

	return (

		ReactDOM.createPortal(
			<nav>
				<div className={onOpen ? "bg-modal" : ''}></div>
				<div className={onOpen ? 'navbar-primary' : '-'}>
					<div className='navbar-body'>

						<img className='navbar-brand-circle' src="https://picsum.photos/50" alt="el pepe" />
						<button className='fas fa-bars fa-lg navbar-toggler' onClick={onOpen ? close : open}></button>
					</div>

					<div id="navbar-container">
						<NavbarModal onOpen={onOpen} onClose={close} />
					</div>
				</div>
			</nav>,
			document.getElementById('navbar')
		)
	);
}

export default Navbar;