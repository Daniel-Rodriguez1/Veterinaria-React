import React from 'react'
import Banner from '../components/banner/banner'
import { Link } from 'react-router-dom'
import Post from '../components/post/post'
import img0 from '../img/todos.jpg'
import img1 from '../img/persona1.png'
import img2 from '../img/persona2.png'
import img3 from '../img/persona3.png'
import mapa from '../img/mapa.png'
export default function About() {
	return (
		<div>
			<Banner
				title='Nosotros'
				subtitle='Somos una Veterinaria 100% Griega, enfocado en el bienestar de tu mascota, medicina veterinaria, grooming, Pet Shop y mucho más!.'
			/>
			<div className='seccion bg-trans'>
				<div className='row menos-margin'>
					<div className='col-md-6 offset-lg-1 col-lg-4 bg-grey p-5'>
						<h2 className='featurette-heading letra1 text-center'>
							Misión<i className='fas fa-dog pets pl-2'></i>
						</h2>
						<p>
							Somos una empresa que se dedica a brindarle lo que necesite para
							su mascota tanto los productos como la atención medica necesaria,
							ademas contamos con asesoria nutricional y una sección para su
							jardin. nuestra prioridad es darle a ud y su mascota una atencion
							responsable, justo y eficiente con la mayor variedad de productos
							y servicios a su alcance.
						</p>
					</div>
					<div className='col-md-6 offset-lg-2 col-lg-4 bg-grey p-5'>
						<h2 className='featurette-heading letra1 text-center'>
							Visión<i className='fas fa-cat pets pl-2'></i>
						</h2>
						<p>
							A futuro la meta es pasar a ser hospital 24/7 con equipo de punta
							y mayor espacio en el establecimiento con el mejor servicio al
							cliente y tener la mejor experiencia al cliente en calidad y
							servicio.
						</p>
					</div>
				</div>
				{/* <hr className='featurette-divider' /> */}
				{/* <div className='col-md-12 offset-lg-3 col-lg-6'>
					<img
						className='d-block w-100 '
						src={img0}
						alt='Third slide'
						style={{ width: '100%', height: '600px' }}
					/>
				</div> */}
				<hr className='featurette-divider' />
				<div className='card-group text-center'>
					<div className='card'>
						<img src={img1} className='card-img-top' alt='...' />
						<div className='card-body'>
							<h5 className='card-title'>Emilia Johnson</h5>
							<p className='card-text'>Fundadora</p>
							<div>
								<a
									className='btn btn-outline-secondary btn-negro'
									href='https://www.instagram.com/'
								>
									Redes Sociales »
								</a>
							</div>
						</div>
					</div>
					<div className='card '>
						<img src={img2} className='card-img-top' alt='...' />
						<div className='card-body'>
							<h5 className='card-title'>Peter Ronson </h5>
							<p className='card-text'>Médico</p>
							<div>
								<animateTransform
									className='btn btn-outline-secondary btn-negro'
									href='https://www.instagram.com/'
								>
									Redes Sociales »
								</animateTransform>
							</div>
						</div>
					</div>
					<div className='card'>
						<img src={img3} className='card-img-top' alt='...' />
						<div className='card-body'>
							<h5 className='card-title'>Barbra Stevens</h5>
							<p className='card-text'>Asistente</p>
							<div>
								<a
									className='btn btn-outline-secondary btn-negro'
									href='https://www.instagram.com/'
								>
									Redes Sociales »
								</a>
							</div>
						</div>
					</div>
				</div>
				<hr className='featurette-divider' />
				<Post
					title='Ubicación y Horarios!'
					icon='clock'
					subtitle='Dirección: Av Central León Cortés Castro, Provincia de Alajuela, Grecia.'
					subtitle2='Horario: Lunes - Sabados, 7am-6pm'
					imgPath={mapa}
					boton='Llegar'
					link='https://goo.gl/maps/MnkrbnP5UkNSamk56'
				/>
			</div>
		</div>
	)
}
