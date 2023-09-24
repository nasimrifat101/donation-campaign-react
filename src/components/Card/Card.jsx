/* eslint-disable react/prop-types */
const Card = ({ card }) => {
  const { img, title, category, card_bg, category_bg, text_bg } = card;

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
        <figure>
          <img src={img} className="w-96 h-36" alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="text-sm p-1 w-fit rounded-md" style={categoryStyle}>
            {category}
          </h2>
          <p className="text-md font-semibold" style={{ color: text_bg }}>
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
