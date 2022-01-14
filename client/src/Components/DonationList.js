import { useSelector, useDispatch } from "react-redux";
import * as actions from "../Store/actions";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import DonationPresentation from './DonationPresentation';

function DonationList(props) {
  const errorDetail = useSelector((state) => state.donation.listStatus);
  const reduxDonationList = useSelector((state) => state.donation.donationList);
  const [donationList] = useState([...reduxDonationList]);

  const dispatch = useDispatch();

  console.log("reduxDonationList:" + reduxDonationList);
  console.log("donationList" + donationList);

  let donationListDetails;

  const deleteDonation = (id) => {
     dispatch(actions.deleteInPorgress());
     dispatch(actions.deleteDonation(id));
     dispatch(actions.listDonation());
  }

  if (reduxDonationList.length > 0) {
    donationListDetails = reduxDonationList.map((indiDonation) => {
      return <DonationPresentation 
              id={indiDonation.id}
              amount={parseInt(indiDonation.amount)}
              userid={indiDonation.userid}
              tip={indiDonation.tip}
              deleteDonation={deleteDonation}
              key={indiDonation.id}
              
              />
    });
  }

  useEffect(() => {
    dispatch(actions.listInPorgress());
    dispatch(actions.listDonation());
  }, []);

  return (
    <div className='container'>
      <h1>Donation List</h1>
      <Nav />

      <div>{donationListDetails}</div>

      <span>{errorDetail}</span>
    </div>
  );
}

export default DonationList;
