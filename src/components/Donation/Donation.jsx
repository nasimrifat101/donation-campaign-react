import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getSavedDonation } from "../../utility/utility";

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
        <div>
            sakdkljdk {donationsGiven.length}
        </div>
    );
};

export default Donation;
