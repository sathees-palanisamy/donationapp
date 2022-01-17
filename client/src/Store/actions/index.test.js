import moxios from 'moxios';

import { storeFactory } from '../../test/testutil';
import { getDonationList, postDonationItem, deleteDonationItem } from './index';

describe('getDonationList', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('getDonationList is returned', () => {
    const store = storeFactory();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: [
          {
              "id": 1634585325626,
              "userid": "1",
              "amount": "0",
              "tip": "10"
          },
          {
              "id": 1639962674693,
              "userid": "1",
              "amount": "400",
              "tip": "4"
          },
          {
              "id": 1642205197746,
              "userid": "1",
              "amount": "140",
              "tip": "14"
          },
          {
              "id": 1,
              "userid": "1",
              "amount": "700",
              "tip": "7"
          }
      ],
      });
    });

    return store.dispatch(getDonationList())
      .then(() => {
        const donationList = store.getState().donation.donationList;
        expect(donationList.length).toBe(4);
      });
  });
});


describe('postDonationItem', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('postDonationItem is returned', () => {
    const store = storeFactory();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: {
          "id": "1",
          "userid": "1",
          "amount": "700",
          "tip": "7"
      },
      });
    });

    return store.dispatch(postDonationItem())
      .then(() => {
        const donationList = store.getState().donation.donationList;
        expect(donationList.length).toBe(0);
      });
  });
});


describe('deleteDonationItem', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('deleteDonationItem is returned', () => {
    const store = storeFactory();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: {
      },
      });
    });

    return store.dispatch(deleteDonationItem())
      .then(() => {
        const donationList = store.getState().donation.donationList;
        expect(donationList.length).toBe(0);
      });
  });
});
