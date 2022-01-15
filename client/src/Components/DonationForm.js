import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../Store/actions";
import Nav from "./Nav";

function DonationForm(props) {
  const [userId, setUserId] = React.useState("");
  const [donationAmt, setDonationAmt] = React.useState(0);
  const [tipAmount, setTipAmount] = React.useState(0);
  const [formError,setFormError] = React.useState("");

  const errorDetail = useSelector((state) => state.donation.insertStatus);
  const dispatch = useDispatch();

  // console.log("errorDetail:" + errorDetail);

  const saveDonation = (event) => {
    event.preventDefault();
    console.log(userId);
    console.log(donationAmt);
    console.log(tipAmount);

    if (userId !== "") {
      setFormError("");
      setUserId("");
      setDonationAmt(0);
      setTipAmount(0);
      dispatch(actions.insertInPorgress());
      dispatch(actions.postDonationItem(userId, donationAmt, tipAmount));
    } else {
      setFormError("Invalid Input")
    }
  };

  const handleUserId = (event) => {
    setUserId(event.target.value);
  };

  const handleDonationAmt = (event) => {
    setDonationAmt(event.target.value);
  };

  const handleTipAmt = (event) => {
    setTipAmount(event.target.value);
  };

  return (
    <div className='container' data-test='form-container'>
      <h1 data-test='form-header'>Form Details</h1>
   
      <form onSubmit={saveDonation} className="Form" data-test='form-detail'>
        <div className="Form--field" data-test='userid-field-details'>
          <label data-test='userid-field-label'>User ID: </label>
          <input
            type="text"
            onChange={handleUserId}
            id="userId"
            value={userId}
            data-test='userid-field-input'
          />
        </div>

        <div className="Form--field" data-test="amount-field-details">
          <label data-test="amount-field-label">Donation Amount: </label>
          <input
            type="number"
            onChange={handleDonationAmt}
            id="amount"
            value={donationAmt}
            data-test="amount-field-input"
          />
        </div>
        <div className="Form--field" data-test="tip-field-details">
          <label data-test="tip-field-label">Tip Amount: </label>
          <input
            type="number"
            onChange={handleTipAmt}
            id="amount"
            value={tipAmount}
            data-test="tip-field-input"
          />
        </div>
        <button className="Form__button" type="submit" data-test="form-button">
          Add Donation
        </button>
      </form>
      <div>{errorDetail}</div>
      <div data-test="form-error">{formError}</div>
    </div>
  );
}

export default DonationForm;
