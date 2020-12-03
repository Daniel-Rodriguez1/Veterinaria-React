import React, { useEffect } from 'react'
import Banner from '../components/banner/banner'
import img1 from '../img/groming3.jpg'
import img2 from '../img/groming2.jpg'
import img3 from '../img/groming.jpg'
import img4 from '../img/perra.jpeg'
import dental from '../img/dental.png'

export default function Grooming() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

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
							Grooming<i className='fas fa-dog pets pl-2'></i>
						</h2>
						<p className='lead pb-5 pt-5'>
							El la Veterinaria Memo nos especializamos en el conjunto de
							técnicas de peluquería canina y felina que mantienen el buen
							estado del manto de perros y gatos, garantizando su bienestar
							higiénico y saludable y dándole un estilo acorde con su raza.
							Grooming es un término de origen americano que significa cepillar,
							preparar o arreglar.
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
							<div className='carousel-item'>
								<img
									class='d-block w-100'
									src={img3}
									alt='Second slide'
									style={{ width: '100%', height: '700px' }}
								/>
							</div>
							<div className='carousel-item'>
								<img
									class='d-block w-100'
									src={img4}
									alt='Third slide'
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
					<div className='col-md-8 offset-md-2 padding-text'>
						<h2 className='featurette-heading letra1 text-center'>
							Importancia de las limpiezas dentales
							<i className='fas fa-tooth pets pl-2'></i>
						</h2>
						<img src={dental} style={{ width: '100%' }} alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}
