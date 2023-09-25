import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  
  return (
    <div>
      <Banner setSearchQuery={setSearchQuery}></Banner>
      <Cards cards={cards} searchQuery={searchQuery}></Cards>
      
    </div>
  );
};

export default Home;
