import React from 'react'
import './style.scss'
export default function Banner(banner) {
	const { title, subtitle } = banner
	return (
		<div>
			<div className='position-relative overflow-hidden p-3 p-md-5 text-center bg-light perritos'>
				<div className='col-xs-12 col-lg-8 p-5 mx-auto margin-top'>
					<h1 className='display-4 font-weight-normal letra1 h1 '>{title}</h1>
					<p className='lead font-weight-normal pb-5'>{subtitle}</p>
				</div>
				<div className='product-device box-shadow d-none d-md-block'></div>
				<div className='product-device product-device-2 box-shadow d-none d-md-block'></div>
			</div>
		</div>
	)
}
