import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {

	const { data: images, loading } = useFetchGifs(category)

	return (
		<div>
			<h3 className='animate__animated animate__backInLeft' > {category} </h3>

			{ loading && <p className='animate__animated animate__backInLeft' >Loading...</p> }

			<div className='card-grid animate__animated animate__backInLeft'>
				{
					images.map( (img) => (
						<GifGridItem key={img.id} {...img} />
					))
				}
			</div>
		</div>
	)
}

export default GifGrid


