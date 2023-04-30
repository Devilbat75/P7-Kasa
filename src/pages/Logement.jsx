import React from 'react'
import '../styles/Logement.css'
import items from '../datas/item.json'
import Collapse from '../components/Collapse'
import Carousel from '../components/Carousel'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import etoileGrise from '../assets/étoiles_grises.png'
import etoileRouge from '../assets/étoiles_rouges.png'

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
	const rating = itemCurrentLogement[0].rating;

	return (
		<>
			<Carousel imageSlider={imageSlider}/>
			<main className="logement">
				<div className="logement_content">
					<div className="logement_content_infos">
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
					<div className="logement_content_host">
						<div>
							<div className='logement_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={itemCurrentLogement[0].host.picture} alt="propriétaire de ce logement" />
						</div>
						<div className="logement_content_host_stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? etoileRouge : etoileGrise} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="logement_collapse">
					<div className="logement_collapse_item">
						<Collapse title={'Description'} content={description} />	
					</div>
					<div className="logement_collapse_item">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>	
				</div>
			</main>
		</>
	)
}

export default Logement;