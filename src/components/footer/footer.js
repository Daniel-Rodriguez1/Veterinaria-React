import React from 'react'
import './style.scss'
import gatitos from '../../img/gato-gatito150.png'
import { Link } from 'react-router-dom'
export default function Footer() {
	return (
		<footer className='page-footer font-small unique-color-dark huellas'>
			<div className='container text-center text-md-left mt-5 bg-white2'>
				<div className='row mt-3'>
					<div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 pt-5 text-center'>
						<h6 className='text-uppercase font-weight-bold text-shadow'>
							Redes Sociales
						</h6>
						<hr
							className='deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto'
							style={{ width: '70px' }}
						/>
						<p></p>
						<a href='https://www.facebook.com/veterinariamemocr/'>
							<span className='iconos'>
								<i className='fab fa-facebook-f'></i>
							</span>
						</a>
						<a href='https://twitter.com/home'>
							<span className='iconos'>
								<i className='fab fa-twitter'></i>
							</span>
						</a>
						<a href='https://www.instagram.com/veterinaria_memo_oficial/'>
							<span className='iconos'>
								<i className='fab fa-instagram'></i>
							</span>
						</a>
						<img
							className='featurette-image img-fluid mx-auto'
							data-src='holder.js/500x500/auto'
							alt='100x100'
							src={gatitos}
							data-holder-rendered='true'
						/>
					</div>
					<div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 pt-md-5'>
						<h6 className='text-uppercase font-weight-bold text-shadow'>
							Links
						</h6>
						<hr
							className='deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto'
							style={{ width: '130px' }}
						/>
						<p>
							<Link to='/'>Home</Link>
						</p>
						<p>
							<Link to='/grooming'>Grooming</Link>
						</p>
						<p>
							<Link to='/clinica'>Clinica</Link>
						</p>
						<p>
							<Link to='/productos'>Productos</Link>
						</p>
					</div>
					<div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 pt-md-5'>
						<h6 className='text-uppercase font-weight-bold text-shadow'>
							Links
						</h6>
						<hr
							className='deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto'
							style={{ width: '70px' }}
						/>
						<p>
							<Link to='/promociones'>Promociones</Link>
						</p>
						<p>
							<Link to='/grooming'>Servicios</Link>
						</p>
						<p>
							<Link to='/about'>Acerca de Nosotros</Link>
						</p>
						<p>
							<Link to='/contactanos'>Contactanos</Link>
						</p>
					</div>
					<div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 pt-md-5'>
						<h6 className='text-uppercase font-weight-bold text-shadow'>
							Contactos
						</h6>
						<hr
							className='deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto'
							style={{ width: '70px' }}
						/>
						<p>
							<i className='fas fa-home mr-3 ico'></i> Grecia, Alajuela, CR
						</p>
						<p>
							<i className='far fa-clock mr-3 ico'></i>{' '}
							<span className='horario'>Horario:</span> Lun-Sab:7AM-6PM
						</p>
						<p>
							<i className='fas fa-phone mr-3 ico'></i> + 24 94 88 16
						</p>
						<p>
							<i className='fas fa-envelope mr-3 ico'></i> info@example.com
						</p>
					</div>
				</div>
			</div>
			<div className='footer-copyright container text-center py-3 bg-white2'>
				© 2020 Copyright:
				<a href='https://mdbootstrap.com/'>Veterinaria Memo</a>
			</div>
		</footer>
	)
}
