module.exports = {
  ...jest.requireActual(".."),
  __esModule: true,
  getDonationList: jest.fn().mockReturnValue({ type: 'DONATION_LIST_SUCEESS', donationList: [
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
] }),

deleteDonationItem: jest.fn().mockReturnValue({ type: 'DONATION_DELETE_SUCEESS', donationList: {}}),

postDonationItem: jest.fn().mockReturnValue({ type: 'DONATION_ADD_SUCEESS', data: {
  "id": "1",
  "userid": "1",
  "amount": "700",
  "tip": 7
}
 }),


};
