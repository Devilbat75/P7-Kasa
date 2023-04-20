import React from 'react'
import items from '../datas/item.json'
import Collapse from '../components/Collapse'
import Slider from '../components/Carousel'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Logement() {
	
	const [imageSlider, setImageSlider] = useState([]);

	const idAccomodation = useParams('id').id;
	const dataCurrentAccomodation = items.filter(item => item.id === idAccomodation);
	
	useEffect(() => {
		const dataCurrentAccomodation = items.filter(item => item.id === idAccomodation);
		setImageSlider(dataCurrentAccomodation[0].pictures);
	}, [idAccomodation]);

	const name = dataCurrentAccomodation[0].host.name.split(' '); 
	const description  = dataCurrentAccomodation[0].description;
	const equipments = dataCurrentAccomodation[0].equipments;

	return (
		<>
			<Slider imageSlider={imageSlider}/>
			<main className="accomodation">
				<div className="accomodation_content">
					<div className="accomodation_content_infos">
						<h1>{dataCurrentAccomodation[0].title}</h1>
						<p>{dataCurrentAccomodation[0].location}</p>
						<div>
							{dataCurrentAccomodation[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="accomodation_content_host">
						<div>
							<div className='accomodation_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentAccomodation[0].host.picture} alt="host of this accomodation" />
						</div>
							
						<div className="accomodation_content_host_stars">
							{[...Array(5)].map((star, index) => {
								return (
									<img key={index} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="accomodation_collapse">
					<div className="accomodation_collapse_item">
						<Collapse title={'Description'} content={description} />	
					</div>
					<div className="accomodation_collapse_item">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>	
				</div>
			</main>
		</>
	)
}

export default Logement;