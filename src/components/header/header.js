import React from 'react'
import './style.scss'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header>
			<nav className='navbar navbar-expand-lg navbar-dark text-light bg-oscuro'>
				<Link className='py-2 text-light' to='/'>
					<img src={logo} width='44' height='44' className='d-block mx-auto' />
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-light navbar-toggler-icon '></span>
				</button>
				<div className='collapse navbar-collapse container-nav' id='navbarNav'>
					<ul className='navbar-nav '>
						<li className='nav-item active'>
							<Link className='nav-link text-light' to='/'>
								Inicio <span className='sr-only'>(current)</span>
							</Link>
						</li>
						<li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle text-light'
								to='/grooming'
								id='navbarDropdownMenuLink'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'
							>
								Servicios
							</a>
							<div
								className='dropdown-menu bg-oscuro'
								aria-labelledby='navbarDropdownMenuLink'
							>
								<Link className='nav-link ' to='/grooming'>
									Grooming
								</Link>
								<Link className='nav-link ' to='/clinica'>
									Clinica
								</Link>
							</div>
						</li>
						<li className='nav-item'>
							<Link className='nav-link text-light' to='/productos'>
								Productos
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link text-light' to='/promociones'>
								Promociones
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link text-light' to='/about'>
								Acerca de nosotros
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link text-light' to='/contactanos'>
								Contactanos
							</Link>
						</li>
					</ul>
					<div className='text-light telefono'>
						<i className='fab fa-whatsapp'></i>
						<span>2494-8816</span>
					</div>
				</div>
			</nav>
		</header>
	)
}
