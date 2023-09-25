/* eslint-disable react/prop-types */

import Card from "../Card/Card";

const Cards = ({ cards, searchQuery }) => {
  const filteredCards = cards.filter((card) =>
  card.category.toLowerCase().includes(searchQuery.toLowerCase())
);


    return (
        <div className="grid mx-10 md:grid-cols-2 lg:grid-cols-4 lg:mx-0 gap-4 mt-10">
           
           {filteredCards.map((card) => (
        <div key={card.id}>
          <Card card={card}></Card>
        </div>
      ))}
            
        </div>
    );
};

export default Cards;