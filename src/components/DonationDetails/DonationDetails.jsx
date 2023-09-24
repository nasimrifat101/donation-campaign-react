import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const DonationDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const idint = parseInt(id);
  const card = cards.find((card) => card.id === idint);

  const { img, title, description, price, btn_bg } = card;

  return (
    <div className="relative">
      <div>
        <img className="w-full" src={img} alt={title} />
        <div className="absolute bottom-[260px] left-0 w-full h-24 rounded-lg bg-black bg-opacity-50"></div>
      </div>
      <div className="absolute bottom-[288px] left-4">
        <button
          style={{ backgroundColor: btn_bg }}
          className="btn text-white border-none"
        >
          <span>Donate</span> ${price}
        </button>
      </div>
      <div className="pt-10">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p className="text-lg py-5">{description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;
