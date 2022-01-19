import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import { storeFactory } from '../test/testutil';
import DonationList from './DonationList';

// activate global mock to make sure getSecretWord doesn't make network call
jest.mock("../Store/actions");

const store = storeFactory({});

it('renders no donation', () => {
  const tree = renderer.create(<Provider store={store}><DonationList  /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

const defaultState = {
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
  listStatus: "",
}
}

const store2 = storeFactory({...defaultState});

it('renders list of donation', () => {
  const tree = renderer.create(<Provider store={store2}><DonationList  /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});