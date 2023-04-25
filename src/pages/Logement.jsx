import React from 'react'
import items from '../datas/item.json'
import Collapse from '../components/Collapse'
import Carousel from '../components/Carousel'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Logement() {
	
	const [imageSlider, setImageSlider] = useState([]);

	const idLogement = useParams('id').id;
	const itemCurrentLogement = items.filter(item => item.id === idLogement);
	
	useEffect(() => {
		const itemCurrentLogement = items.filter(item => item.id === idLogement);
		setImageSlider(itemCurrentLogement[0].pictures);
	}, [idLogement]);

	const name = itemCurrentLogement[0].host.name.split(' '); 
	const description  = itemCurrentLogement[0].description;
	const equipments = itemCurrentLogement[0].equipments;

	return (
		<>
			<Carousel imageSlider={imageSlider}/>
			<main className="accomodation">
				<div className="accomodation_content">
					<div className="accomodation_content_infos">
						<h1>{itemCurrentLogement[0].title}</h1>
						<p>{itemCurrentLogement[0].location}</p>
						<div>
							{itemCurrentLogement[0].tags.map((tag, index) => {
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
							<img src={itemCurrentLogement[0].host.picture} alt="host of this accomodation" />
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