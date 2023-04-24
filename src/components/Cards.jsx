import React from "react"
import items from "../datas/item.json"
import "../styles/Cards.css"
import { Link } from "react-router-dom"

//Composant qui permet de récuperer les informations des logements et les mettres sous forme de Card

const Cards = () => {
    return (
        <div className="kasa-all-logements">

            {/* liste la base de données */}
            {items.map((item) => {
                const { id, cover, title } = item;
                return (
                    <div className="kasa-fiche-logement" key={id}>
                        <Link to={ '/logement/'+id }>
                            <img src={cover} alt={title} />
                            <h3>{title}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards;