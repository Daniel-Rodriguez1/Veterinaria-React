import React from 'react'
import Banner from '../components/banner/banner'
import img1 from '../img/promociones/promo.jpg'
import img2 from '../img/promociones/oferta.jpg'
import img3 from '../img/promociones/productos.jpg'

export default function Promociones() {
	return (
		<div>
			<Banner
				title='Servicios'
				subtitle='Ofrecemos servicios de: consulta médica, vacunación, cirugías, ultrasonido, microscopio, grooming, limpieza dental, control de peso y mucho más. Visítenos.'
			/>

			<div className='marketing seccion'>
				<div className='row featurette menos-margin bg-grey'>
					<div className='col-md-6 padding-text'>
						<h2 className='featurette-heading letra1 pt-5'>
							Clinica<i className='fas fa-cat pets pl-2'></i>
						</h2>
						<p className='lead pb-5 pt-5'>
							El la Veterinaria Memo tenemos unos doctoros con exelentes
							habilidades para cualquier tipo de tratamiento animal, estamos
							dispuestos a realizar cualquier urgencia dada con su mascota.
						</p>
					</div>
					<div
						id='carouselExampleControls'
						class='carousel slide col-md-6 '
						data-ride='carousel'
					>
						<div className='carousel-inner'>
							<div className='carousel-item active'>
								<img
									class='d-block w-100'
									src={img1}
									alt='First slide'
									style={{ width: '100%', height: '700px' }}
								/>
							</div>
							<div className='carousel-item'>
								<img
									class='d-block w-100'
									src={img2}
									alt='First slide'
									style={{ width: '100%', height: '700px' }}
								/>
							</div>
						</div>
						<a
							class='carousel-control-prev'
							href='#carouselExampleControls'
							role='button'
							data-slide='prev'
						>
							<span
								class='carousel-control-prev-icon'
								aria-hidden='true'
							></span>
							<span className='sr-only'>Previous</span>
						</a>
						<a
							class='carousel-control-next'
							href='#carouselExampleControls'
							role='button'
							data-slide='next'
						>
							<span
								class='carousel-control-next-icon'
								aria-hidden='true'
							></span>
							<span className='sr-only'>Next</span>
						</a>
					</div>
				</div>
				<hr className='featurette-divider' />
				<div className='row featurette bg-grey'>
					<div className='col-md-6 padding-text'>
						<h2 className='featurette-heading letra1 pt-5'>
							Rifas<i className='fas fa-cat pets pl-2'></i>
						</h2>
						<p className='lead pb-5 pt-5'>
							Desde este 15 de Octubre hasta el 15 de Noviembre estaremos
							haciendo esta espectacular rifa!! Solo tienes que comprar
							cualquier pastilla de la marca #SIMPARICA y depositar tus datos en
							el buzón en nuestra veterinaria Somos Veterinaria Memo!
						</p>
					</div>

					<div className='col-md-6 order-md-1 p-5'>
						<img
							class='featurette-image img-fluid mx-auto'
							data-src='holder.js/500x500/auto'
							alt='500x500'
							src={img3}
							data-holder-rendered='true'
							style={{ width: '100%', height: '600px' }}
						/>
					</div>
				</div>
				<hr className='featurette-divider' />
				<div className='row featurette bg-grey'>
					<div className='col-md-6 padding-text'>
						<h2 className='featurette-heading letra1 '>
							Ganadores<i className='fas fa-crown pets pl-2'></i>
						</h2>
						<p className='lead pb-5 pt-5'>
							{' '}
							Los o las ganadoras de la ultima rifa de veterinaria memo son:
						</p>
					</div>

					<div className='col-md-6 order-md-1 p-5 text-center '>
						<p className='letra2 size-t p-5'>Mariam Marín Gutiérrez</p>
						<p className='letra2 size-t'>Jennífer Tijerino</p>
					</div>
				</div>

				<hr className='featurette-divider' />
			</div>
		</div>
	)
}
