import React from "react"
import items from "../datas/item.json"
import "../styles/Cards.css"

//Composant qui permet de récuperer les informations des logements et les mettres sous forme de Card

const Cards = () => {
    return (
        <div className="kasa-all-logements">

            {/*Liste de la base de données*/}
            {items.map((item) => {
                const { id, cover, title } = item;

                //afficher les logements sur la page d'accueil
                return (
                    <div className="kasa-fiche-logement" key={id}>
                        <img src={cover} alt={title} />
                        <h3> {title} </h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards