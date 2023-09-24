import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const Cards = () => {

const [cards, setCards] = useState([])

useEffect(()=>{
    fetch('donation.json')
    .then(res => res.json())
    .then(data => setCards(data))
},[])

    return (
        <div className="grid grid-cols-4 gap-4 mt-20">
           
           {
           cards.map((card) => (
        <div key={card.id}>
          <Link to={`/details/${card.id}`}>
            <Card card={card}></Card>
          </Link>
        </div>
      ))}
            
        </div>
    );
};

export default Cards;