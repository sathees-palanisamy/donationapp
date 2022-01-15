import { useSelector, useDispatch } from "react-redux";
import * as actions from "../Store/actions";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import DonationPresentation from './DonationPresentation';

function DonationList(props) {
  const errorDetail = useSelector((state) => state.donation.listStatus);
  const reduxDonationList = useSelector((state) => state.donation.donationList);
  
  const dispatch = useDispatch();


  let donationListDetails;

  const deleteDonation = (id) => {
     dispatch(actions.deleteInPorgress());
     dispatch(actions.deleteDonationItem(id));
     dispatch(actions.getDonationList());
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
    dispatch(actions.getDonationList());
  }, []);

  return (
    <div className='container' data-test="donation-list">
      <h1 data-test="donation-list-heading">Donation List</h1>

      <div data-test="donation-details">{donationListDetails}</div>

      <span>{errorDetail}</span>
    </div>
  );
}

export default DonationList;
