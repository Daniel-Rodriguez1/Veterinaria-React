import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
export default function Post(props) {
	const {
		title,
		subtitle,
		imgPath,
		imgPosition = 'right',
		boton,
		icon,
		subtitle2,
		link,
	} = props

	return (
		<div className='row featurette'>
			<div
				className={`col-md-6 padding-text ${
					imgPosition === 'left' ? 'order-md-2' : ''
				}`}
			>
				<h2 className='featurette-heading letra1 pb-5'>
					{title}
					<i className={`fas fa-${icon} pets pl-2`}></i>
				</h2>
				<p className='lead pb-5'>{subtitle}</p>
				<p className='lead pb-5'>{subtitle2}</p>
				<div>
					{link.startsWith('http') ? (
						<a
							className='btn btn-outline-secondary btn-negro'
							href={link}
							target='_blank'
						>
							{boton} »
						</a>
					) : (
						<Link className='btn btn-outline-secondary btn-negro' to={link}>
							{boton} »
						</Link>
					)}
				</div>
			</div>
			<div className={`col-md-6 ${imgPosition === 'left' ? 'order-md-1' : ''}`}>
				<img
					className='featurette-image img-fluid mx-auto'
					data-src='holder.js/500x500/auto'
					alt='500x500'
					style={{ width: '100%', height: '600px' }}
					src={imgPath}
					data-holder-rendered='true'
				/>
			</div>
		</div>
	)
}
