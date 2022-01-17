import DonationForm from "./DonationForm";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import { storeFactory } from '../test/testutil';
import React from "react";

Enzyme.configure({ adapter: new EnzymeAdapter() });


// activate global mock to make sure getSecretWord doesn't make network call
jest.mock("../Store/actions");
import { postDonationItem } from "../Store/actions";

const defaultProps = { };

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props}
  const store = storeFactory(props);
  return mount(<Provider store={store}><DonationForm {...setupProps}  /></Provider>);
}

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

describe("render",()=> {
  let wrapper;
  beforeEach(()=>{
    wrapper = setup()
  })

  test("Form render without any error",()=>{
     const formComponent = findByTestAttr(wrapper,'form-container')
     expect(formComponent.length).toBe(1);
  });

  test("render Form header",()=>{
    const formComponent = findByTestAttr(wrapper,'form-header')
    expect(formComponent.length).toBe(1);
 });

 test("render full form details",()=>{
  const formComponent = findByTestAttr(wrapper,'form-detail')
  expect(formComponent.length).toBe(1);
});

test("render userid field details",()=>{
  const formComponent = findByTestAttr(wrapper,'userid-field-details')
  expect(formComponent.length).toBe(1);
});

test("render userid field label",()=>{
  const formComponent = findByTestAttr(wrapper,'userid-field-label')
  expect(formComponent.length).toBe(1);
});

test("render userid field input",()=>{
  const formComponent = findByTestAttr(wrapper,'userid-field-input')
  expect(formComponent.length).toBe(1);
});

test("render amount field details",()=>{
  const formComponent = findByTestAttr(wrapper,'amount-field-details')
  expect(formComponent.length).toBe(1);
});

test("render amount field label",()=>{
  const formComponent = findByTestAttr(wrapper,'amount-field-label')
  expect(formComponent.length).toBe(1);
});

test("render amount field input",()=>{
  const formComponent = findByTestAttr(wrapper,'amount-field-input')
  expect(formComponent.length).toBe(1);
});

test("render tip field details",()=>{
  const formComponent = findByTestAttr(wrapper,'tip-field-details')
  expect(formComponent.length).toBe(1);
});

test("render tip field label",()=>{
  const formComponent = findByTestAttr(wrapper,'tip-field-label')
  expect(formComponent.length).toBe(1);
});

test("render tip field input",()=>{
  const formComponent = findByTestAttr(wrapper,'tip-field-input')
  expect(formComponent.length).toBe(1);
});

test("render submit button",()=>{
  const formComponent = findByTestAttr(wrapper,'form-button')
  expect(formComponent.length).toBe(1);
});

});

describe("State controlled userid input field",() => {
  let mockUserid = jest.fn();
  let wrapper;

  beforeEach(() => {
    mockUserid.mockClear();
    React.useState = () => ["",mockUserid]
    wrapper = setup({});

  })

  test("userid input field change testing",()=> {

    const inputComponent = findByTestAttr(wrapper,"userid-field-input");
    const mockEvent = { target: { value: "1"}}
    inputComponent.simulate("change",mockEvent);

    expect(mockUserid).toHaveBeenCalledWith("1");
  })

  test("userid input field data clear once submit form",()=> {

    const inputComponent = findByTestAttr(wrapper,"userid-field-input");
    const mockEvent = { target: { value: "1"}}
    inputComponent.simulate("change",mockEvent);

    const submitComponent = findByTestAttr(wrapper,"form-button")
    submitComponent.simulate('click',{ preventDefault() {}})

    expect(inputComponent.get(0).props.value).toEqual('');

  })

})
