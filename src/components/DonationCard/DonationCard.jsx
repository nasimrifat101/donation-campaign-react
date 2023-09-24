import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DonationCard = ({ donation }) => {
  const { img_squre, title, category, card_bg, category_bg, text_bg, price, btn_bg } = donation;

  const cardStyle = {
    backgroundColor: card_bg,
  };

  const categoryStyle = {
    backgroundColor: category_bg,
    color: text_bg,
  };

  return (
    <div>
      <div
        className="card card-compact bg-base-100 shadow-md"
        style={cardStyle}
      >
       <div className="flex">
       <div>
          <img src={img_squre} className="w-48 h-44 " alt={title} />
        </div>
        <div className="card-body">
          <h2 className="text-sm p-1 w-fit rounded-md" style={categoryStyle}>
            {category}
          </h2>
          <p className="text-lg font-semibold" style={{ color: text_bg }}>
            {title}
          </p>
          <p className="text-md font-semibold" style={{ color: text_bg }}>${price}</p>
          <Link to={`/details/${donation.id}`}>
          <button
            style={{ backgroundColor: btn_bg }}
            className="py-2 w-9/12 text-sm rounded-lg text-white border-none"
          >
            View Details
          </button>
        </Link>

        </div>
       </div>
      </div>
    </div>
  );
};

export default DonationCard;
