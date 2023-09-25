import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getSavedDonation } from "../../utility/utility";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {
  const [donationsGiven, setDonationsGiven] = useState([]);
  const donations = useLoaderData();

  useEffect(() => {
    const storedDonationIds = getSavedDonation();
    if (donations.length > 0) {
      const donationsGiven = [];
      for (const id of storedDonationIds) {
        const donation = donations.find((donation) => donation.id === id);
        if (donation) {
          donationsGiven.push(donation);
        }
      }
      setDonationsGiven(donationsGiven);
    }
  }, [donations]);

  const [showAllDonations, setShowAllDonations] = useState(false);
  const maxDisplayDonations = showAllDonations ? donationsGiven.length : 4;

  return (
    <div>
      <div className="grid mx-5 lg:mx-0 md:grid-cols-2 gap-4 mt-10">
        {donationsGiven.slice(0, maxDisplayDonations).map((donation) => (
          <DonationCard donation={donation} key={donation.id}></DonationCard>
        ))}
      </div>
      {donationsGiven.length > 4 && (
        <div className="flex justify-center mt-4">
          <button
            className="btn btn-accent text-white border-none"
            onClick={() => setShowAllDonations(!showAllDonations)}
          >
            {showAllDonations ? "Show Less" : "Show All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Donation;
