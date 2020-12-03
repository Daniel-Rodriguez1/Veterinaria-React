import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
export default function Carousel() {
	return (
		<div
			id='carouselExampleIndicators'
			className='carousel slide carousel2'
			data-ride='carousel'
		>
			<ol className='carousel-indicators'>
				<li
					data-target='#carouselExampleIndicators'
					data-slide-to='0'
					className='active'
				></li>
				<li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
				<li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
			</ol>
			<div className='carousel-inner'>
				<div className='carousel-item active'>
					<img className='d-block w-100 contenedor-carrusel perritos5' />
					<div className='carousel-caption d-md-block'>
						<div className=' '>
							<h2 className='letra1'>Grooming</h2>
							<p className='d-none d-md-block'>
								El Grooming es el conjunto de técnicas de peluquería canina y
								felina que mantienen el buen estado del manto de perros y gatos,
								garantizando su bienestar higiénico y saludable y dándole un
								estilo acorde con su raza. Grooming es un término de origen
								americano que significa cepillar, preparar o arreglar.
							</p>
							<div>
								<Link
									className='btn btn-outline-secondary btn-negro'
									to='/grooming'
									role='button'
								>
									Más detalles »
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className='carousel-item'>
					<img className='d-block w-100 contenedor-carrusel perritos2' />
					<div className='carousel-caption d-md-block'>
						<h2 className='letra1'>Centro Médico</h2>
						<p className='d-none d-md-block'>
							Veterinaria Memo dispone de un excelente grupo medico para la
							salud de su mascota tenemos consulta médica, vacunación, cirugías,
							ultrasonido, microscopio, etc
						</p>
						<p>
							<Link
								className='btn btn-outline-secondary btn-negro'
								to='/clinica'
								role='button'
							>
								Más detalles »
							</Link>
						</p>
					</div>
				</div>
				<div className='carousel-item'>
					<img className='d-block w-100 contenedor-carrusel perritos3' />
					<div className='carousel-caption d-md-block'>
						<h2 className='letra1'>Productos</h2>
						<p className='d-none d-md-block'>
							Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
							egestas eget quam. Vestibulum id ligula porta felis euismod
							semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
							condimentum nibh, ut fermentum massa justo sit amet risus.
						</p>
						<p>
							<Link
								className='btn btn-outline-secondary btn-negro'
								to='/productos'
								role='button'
							>
								Más detalles »
							</Link>
						</p>
					</div>
				</div>
			</div>
			<a
				className='carousel-control-prev'
				href='#carouselExampleIndicators'
				role='button'
				data-slide='prev'
			>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='sr-only'>Previous</span>
			</a>
			<a
				className='carousel-control-next'
				href='#carouselExampleIndicators'
				role='button'
				data-slide='next'
			>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='sr-only'>Next</span>
			</a>
		</div>
	)
}
