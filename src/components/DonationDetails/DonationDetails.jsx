import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useParams } from "react-router-dom";
import { saveDonation, hasDonated } from "../../utility/utility";

const DonationDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const idint = parseInt(id);
  const card = cards.find((card) => card.id === idint);
  const isDonated = hasDonated(idint);

  const { img, title, description, price, btn_bg } = card;

  const handleDonateBtn = () => {
    if (!isDonated) {
      saveDonation(idint);
      toast("Donation Successful");
    } else {
      toast("Already Donated Once");
    }
  };

  return (
    <div className="relative">
      <div>
        <img className="w-full h-60 md:h-[400px] lg:h-[600px]" src={img} alt={title} />
        <div className="absolute top-[145px] md:top-[307px] lg:top-[503px] left-0 w-full h-24 rounded-lg bg-black bg-opacity-50"></div>
      </div>
      <div className="absolute top-[170px] md:top-[330px] lg:top-[530px] left-4">
        <button
          style={{ backgroundColor: btn_bg }}
          className="btn text-white border-none"
          onClick={handleDonateBtn}
        >
          <span>Donate</span> ${price}
        </button>
      </div>
      <div className="pt-10">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p className="text-lg py-5">{description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DonationDetails;
