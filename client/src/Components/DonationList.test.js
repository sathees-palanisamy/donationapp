import DonationList from "./DonationList";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import { storeFactory } from '../test/testutil';
import React from "react";

Enzyme.configure({ adapter: new EnzymeAdapter() });

// activate global mock to make sure getSecretWord doesn't make network call
jest.mock("../Store/actions");

import { getDonationList as mockgetDonationList} from "../Store/actions";

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

});

describe("if there are some donations",()=> {
  let wrapper;
  const donationProps = {
 
  }
  beforeEach(()=>{
    wrapper = setup()
  })

test("render withour error",()=> {
  const donationListComp = findByTestAttr(wrapper,"donation-list");
  expect(donationListComp.length).toBe(1)

})

test("render donation list heading",()=> {
  const donationListComp = findByTestAttr(wrapper,"donation-list-heading");
  expect(donationListComp.length).toBe(1)

})

});


describe("useEffect testing for getDonationList", () => {
  beforeEach(() => {
    mockgetDonationList.mockClear();
  });
  test("getDonationList runs on app mount", () => {
    const wrapper = setup();
    expect(mockgetDonationList).toHaveBeenCalledTimes(1);
  });
  test("getDonationList does not run on app update", () => {
    const wrapper = setup();
    mockgetDonationList.mockClear();

    // using setProps because wrapper.update() doesn't trigger useEffect
    // https://github.com/enzymejs/enzyme/issues/2254
    wrapper.setProps();

    expect(mockgetDonationList).toHaveBeenCalledTimes(0);
  });
});
