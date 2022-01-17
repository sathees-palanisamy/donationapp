const initialState = {
  currentUser: "",
  currentDonationAmount: 0,
  currentTipAmount: 0,
  donationList: [],
  insertStatus: "",
  listStatus: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "DONATION_ADD_SUCEESS":
      return {
        ...state,
        insertStatus: "success",
      };
    case "DONATION_ADD_FAIL":
      return {
        ...state,
        insertStatus: "fail",
      };
    case "DONATION_ADD_PROGRESS":
      return {
        ...state,
        insertStatus: "progress",
      };
    case "DONATION_LIST_SUCEESS":
      return {
        ...state,
        listStatus: "success",
        donationList: [...action.donationList]
      };
    case "DONATION_LIST_FAIL":
      return {
        ...state,
        listStatus: "fail",
      };
    case "DONATION_LIST_PROGRESS":
      return {
        ...state,
        listStatus: "progress",
      };
  }

  return state;
};