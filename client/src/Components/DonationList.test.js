import DonationList from "./DonationList";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import { storeFactory } from '../test/testutil';
import React from "react";

Enzyme.configure({ adapter: new EnzymeAdapter() });

// activate global mock to make sure getSecretWord doesn't make network call
// jest.mock('./actions');

// const defaultProps = {
//   donation : {
//     donationList: [
//       {
//       id: 1, 
//       amount : 100,
//       userid: "2",
//       tip: 10,
//      },
//      {
//       id: 2, 
//       amount : 200,
//       userid: "2",
//       tip: 20,
//      }
//   ],
//     listStatus: "",
//       }

// };

const setup = (initialState={}) => {
 
  const store = storeFactory(initialState);
  return mount(<Provider store={store}><DonationList /></Provider>);
}

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

describe("if there are no donations",()=> {
  let wrapper;
  const donationProps = {
    donation : {
  donationList: [],
  listStatus: "",
    }
  }
  beforeEach(()=>{
    wrapper = setup({...donationProps})
  })

test("render withour error",()=> {
  const donationListComp = findByTestAttr(wrapper,"donation-list");
  expect(donationListComp.length).toBe(1)

})

test("render donation list heading",()=> {
  const donationListComp = findByTestAttr(wrapper,"donation-list-heading");
  expect(donationListComp.length).toBe(1)

})

test("render donation list",()=> {
  const donationListComp = findByTestAttr(wrapper,"donation-details");
  expect(donationListComp.length).toBe(1)

})

});

describe("if there are some donations",()=> {
  let wrapper;
  const donationProps = {
 
  }
  beforeEach(()=>{
    wrapper = setup({
      donation : {
        donationList: [
          {
          id: 1, 
          amount : 100,
          userid: "2",
          tip: 10,
         },
         {
          id: 2, 
          amount : 200,
          userid: "2",
          tip: 20,
         }
      ],
        listStatus: "",
          }
    })
  })

test("render withour error",()=> {
  const donationListComp = findByTestAttr(wrapper,"donation-list");
  expect(donationListComp.length).toBe(1)

})

test("render donation list heading",()=> {
  const donationListComp = findByTestAttr(wrapper,"donation-list-heading");
  expect(donationListComp.length).toBe(1)

})

test("render donation list",()=> {
  const donationListComp = findByTestAttr(wrapper,"donation-details");
  expect(donationListComp).toBe(2)

})

});



