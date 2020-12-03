import React, { useEffect } from 'react'
import Post from '../components/post/post'
import { Link } from 'react-router-dom'
import Carousel from '../components/carousel/carousel'
import img1 from '../img/groming.jpg'
import img2 from '../img/productos/productos2.jpg'
import img3 from '../img/promociones/productos.jpg'
export default function Home() {
	useEffect(() => {
		window.scrollTo(0, 0)
	})

	return (
		<div>
			<Carousel />
			<div className='position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center'>
				<div className='col-xs-12 col-lg-8 mx-auto'>
					<h1 className='display-4 font-weight-normal h1 letra1'>
						Veterinaria Memo
					</h1>
					<p className='lead font-weight-normal pb-5'>
						Ofrecemos servicios de: consulta médica, vacunación, cirugías,
						ultrasonido, microscopio, grooming, limpieza dental, control de peso
						y mucho más. Visítenos.
					</p>
					<Link className='btn btn-outline-secondary btn-negro' to='about'>
						Nosotros »
					</Link>
				</div>
				<div className='product-device box-shadow d-none d-md-block'></div>
				<div className='product-device product-device-2 box-shadow d-none d-md-block'></div>
			</div>
			<div className='marketing seccion'>
				<hr className='featurette-divider' />
				<Post
					title='Grooming'
					icon='dog'
					subtitle='El Grooming es el conjunto de técnicas de peluquería canina y felina que mantienen el buen estado del manto de perros y gatos, garantizando su bienestar higiénico y saludable y dándole un estilo acorde con su raza. Grooming es
                            un término de origen americano que significa cepillar, preparar o arreglar.'
					imgPath={img1}
					boton='Grooming'
					link='/grooming'
				/>
				<hr className='featurette-divider' />
				<Post
					title='Productos'
					icon='cat'
					subtitle='Veterinaria Memo les damos la bienvenida y le ofrecemos todo tipo de productos para su mascota, disponemos de una gran variedad de alimentos para cualquier tipo de mascota, medicinas de todo tipo y accesorios como correas, camas, juguetes etc.'
					imgPath={img2}
					boton='Productos'
					imgPosition='left'
					link='/productos'
				/>
				<hr className='featurette-divider' />
				<Post
					title='Rifas'
					icon='paw'
					subtitle='La Veterinari Memo ofrece rifas y promociones variadas, porque para nosotros lo más importante son nuestros clientes. Si quieres participar en nuestras rifas más información en promociones.'
					imgPath={img3}
					boton='Promociones'
					link='/promociones'
				/>
			</div>
		</div>
	)
}
