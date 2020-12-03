import React from 'react'
import Banner from '../components/banner/banner'
import img1 from '../img/muchacha1.jpg'
import img2 from '../img/muchacha2.jpg'
import img3 from '../img/muchacha3.jpg'
import img4 from '../img/muchacha4.jpg'

export default function Contactanos() {
	return (
		<div>
			<Banner
				title='Contactanos'
				subtitle='Si desea contactarnos para alguna duda sugerencia o queja llene el formulario siguiente. Muchas Gracias'
			/>

			<div className='marketing seccion'>
				<form className='mt-5'>
					<div className='form-group'>
						<label htmlfor='exampleFormControlInput1'>Nombre completo</label>
						<input
							type='text'
							className='form-control'
							id='name'
							placeholder='Nombre completo'
						/>
					</div>
					<div className='form-group'>
						<label htmlfor='exampleFormControlInput1'>Numero de teléfono</label>
						<input
							type='number'
							className='form-control'
							id='exampleFormControlInput1'
							placeholder='88888888'
						/>
					</div>
					<div className='form-group'>
						<label htmlfor='exampleFormControlInput1'>Correo electronico</label>
						<input
							type='email'
							className='form-control'
							id='exampleFormControlInput1'
							placeholder='name@example.com'
						/>
					</div>

					<div className='form-group'>
						<label htmlfor='exampleFormControlTextarea1'>Comentario</label>
						<textarea
							className='form-control'
							id='exampleFormControlTextarea1'
							rows='3'
						></textarea>
					</div>
					<div class='col-auto p-0'>
						<button type='submit' class='btn btn-outline-secondary btn-negro'>
							Enviar
						</button>
					</div>
				</form>
				<hr className='featurette-divider' />
			</div>
		</div>
	)
}
