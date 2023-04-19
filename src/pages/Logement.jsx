import React from 'react'
import items from '../datas/item.json'
import Collapse from '../components/Collapse'
import { useParams } from 'react-router-dom'
//import { useEffect, useState } from 'react'

function Logement() {

    const logementId = useParams('id').id;
    const itemLogement = items.filter(item => item.id === logementId);

    const name = itemLogement[0].host.name.split(' '); 
	const description  = itemLogement[0].description;
	const equipments = itemLogement[0].equipments;


    return (
        <>
        <main className="logement">
				<div className="logement_contenu">
					<div className="logement_contenu_infos">
						<h1>{itemLogement[0].title}</h1>
						<p>{itemLogement[0].location}</p>
						<div>
							{itemLogement[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="logement_contenu_host">
						<div>
							<div className='logement_contenu_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={itemLogement[0].host.picture} alt="host of this accomodation" />
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

        </>)
}

export default Logement