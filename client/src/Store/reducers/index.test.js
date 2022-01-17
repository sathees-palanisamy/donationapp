
import donationReducer  from './donationReducer';

test('when previous state is undefined, return false', () => {
  const newState = donationReducer(undefined, {});
  const expectedState = {
    currentUser: "",
    currentDonationAmount: 0,
    currentTipAmount: 0,
    donationList: [],
    insertStatus: "",
    listStatus: ""
  }
  expect(newState.insertStatus).toBe(expectedState.insertStatus);
});

test('return previous state when unknown action type', () => {
  const newState = donationReducer(undefined, {});
  const expectedState = {
    currentUser: "",
    currentDonationAmount: 0,
    currentTipAmount: 0,
    donationList: [],
    insertStatus: "",
    listStatus: ""
  }
  expect(newState.insertStatus).toBe(expectedState.insertStatus);
});


test('return `true` for action type "DONATION_ADD_SUCEESS"', () => {
  const newState = donationReducer({}, {   
    type: "DONATION_ADD_SUCEESS",
  });

  const expectedState = {
    currentUser: "",
    currentDonationAmount: 0,
    currentTipAmount: 0,
    donationList: [],
    insertStatus: "success",
    listStatus: ""
  }
  expect(newState.insertStatus).toBe(expectedState.insertStatus);
  
});
