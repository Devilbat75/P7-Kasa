import "../backend/item.json"
import "../styles/Cart.css"

function Logement() {
    return (
        <ul>
            {cover.map((plant) => (
                <li>{plant}</li>
            ))}
        </ul>
    )
}

export default ShoppingList