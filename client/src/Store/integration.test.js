import { storeFactory } from '../test/testutil';
import { postDonationItem } from './actions';

// activate global mock to make sure getSecretWord doesn't make network call
jest.mock("./actions");

import { getDonationList as mockgetDonationList } from "./actions";

describe('getDonationList  action dispatcher', () => {

  describe('no donation', () => {
    let store;
    const initialState = {  };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test('get state correctly for no donation', () => {
      const newState = store.getState()

      const expectedState = {
        donation: {
          currentUser: "",
          currentDonationAmount: 0,
          currentTipAmount: 0,
          donationList: [],
          insertStatus: "",
          listStatus: "",
        }
      }
      expect(newState.donation).toEqual(expectedState.donation);
    });
    
  });

  describe('get all donations', () => {
    let store;
    const initialState = {  };

    const donationList = [];
  const userId = '1';
  const donationAmt = 100;
  const tipAmount = 10;
 
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test('get state correctly for all donation', () => {
      store.dispatch(mockgetDonationList());
      const newState = store.getState()

      const expectedState = {
        donation : {
        currentUser: "",
        currentDonationAmount: 0,
        currentTipAmount: 0,
        donationList: [
          {
            "id": 1634585325626,
            "userid": "1",
            "amount": "0",
            "tip": 10
        },
        {
            "id": 1639962674693,
            "userid": "1",
            "amount": "400",
            "tip": 4
        },
        {
            "id": 1642205197746,
            "userid": "1",
            "amount": "140",
            "tip": 14
        },
        {
            "id": 1,
            "userid": "1",
            "amount": "700",
            "tip": 7
        }
      ],
        insertStatus: "",
        listStatus: "success",
      }
      }

      expect(newState.donation).toEqual(expectedState.donation);
    });
    
  });


});
