const getSavedDonation = () => {
  const storedDonation = localStorage.getItem("donations");
  if (storedDonation) {
    return JSON.parse(storedDonation);
  }
  return [];
};

const hasDonated = (id) => {
    const storedDonationIds = getSavedDonation();
    return storedDonationIds.includes(id);
  };
  

const saveDonation = (id) => {
    const storedDonation = getSavedDonation();
    const exist = storedDonation.find(donationid => donationid === id);
    if(!exist){
        storedDonation.push(id);
        localStorage.setItem('donations', JSON.stringify(storedDonation))
    }
};

export { getSavedDonation, saveDonation, hasDonated };
