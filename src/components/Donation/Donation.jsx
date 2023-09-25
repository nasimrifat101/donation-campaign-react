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
                const donation = donations.find(donation => donation.id === id);
                if (donation) {
                    donationsGiven.push(donation);
                }
            }
            setDonationsGiven(donationsGiven);
        }
    }, [donations]);

    return (
        <div className="grid mx-5 lg:mx-0 md:grid-cols-2 gap-4 mt-10">
            {
                donationsGiven.map(donation => <DonationCard donation={donation} key={donation.id}></DonationCard>)
            }
        </div>
    );
};

export default Donation;
