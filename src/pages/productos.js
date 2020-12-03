import React from 'react'
import Banner from '../components/banner/banner'
import img1 from '../img/productos/vetred.jpg'
import img2 from '../img/productos/vetgreen.jpg'
import img3 from '../img/productos/vetpink.jpg'
import img4 from '../img/productos/vetblue.jpg'
import img5 from '../img/productos/vetviolet.jpg'

export default function Clinica() {
	return (
		<div>
			<Banner
				title='Productos'
				subtitle='Ofrecemos servicios de: consulta médica, vacunación, cirugías, ultrasonido, microscopio, grooming, limpieza dental, control de peso y mucho más. Visítenos.'
			/>

			<div className='marketing seccion'>
				<div className='row featurette menos-margin bg-grey'>
					<div className='col-md-6 padding-text'>
						<h2 className='featurette-heading letra1 pt-5'>
							VET LIFE<i className='fas fa-dog pets pl-2'></i>
						</h2>
						<p className='lead pb-5 pt-5'>
							Farmina Vet Life Gastrointestinal es un alimento dietético
							completo para perros, destinado a la reducción de trastornos
							agudos que afectan a la absorción intestinal; también está
							indicado para la compensación de la mala digestión y de la
							insuficiencia pancreática exocrina.
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
									style={{ width: '100%', height: '800px' }}
								/>
							</div>
							<div className='carousel-item'>
								<img
									class='d-block w-100'
									src={img2}
									alt='First slide'
									style={{ width: '100%', height: '800px' }}
								/>
							</div>
							<div className='carousel-item'>
								<img
									class='d-block w-100'
									src={img3}
									alt='Second slide'
									style={{ width: '100%', height: '800px' }}
								/>
							</div>
							<div className='carousel-item'>
								<img
									class='d-block w-100'
									src={img4}
									alt='Third slide'
									style={{ width: '100%', height: '800px' }}
								/>
							</div>
							<div className='carousel-item'>
								<img
									class='d-block w-100'
									src={img5}
									alt='Third slide'
									style={{ width: '100%', height: '800px' }}
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
			</div>
		</div>
	)
}
