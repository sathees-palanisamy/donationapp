import DonationForm from "./DonationForm";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import { storeFactory } from '../test/testutil';
import React from "react";

Enzyme.configure({ adapter: new EnzymeAdapter() });

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
    const inputComponent = findByTestAttr(wrapper,"userid-field-input");
    const mockEvent = { target: { value: "1"}}
    inputComponent.simulate("change",mockEvent);

  })

  test("userid input field change testing",()=> {

    expect(mockUserid).toHaveBeenCalledWith("1");
  })

  test("userid input field data clear once submit form",()=> {

    const submitComponent = findByTestAttr(wrapper,"form-button")
    submitComponent.simulate('click',{ preventDefault() {}})
    expect(mockUserid).toHaveBeenCalledWith("1");
  })

})

describe("State controlled donation input field",() => {
  let mockUserid = jest.fn();
  let wrapper;

  beforeEach(() => {
    mockUserid.mockClear();
    React.useState = () => ["",mockUserid]
    wrapper = setup({});
    const inputComponent = findByTestAttr(wrapper,"amount-field-input");
    const mockEvent = { target: { value: 10 }}
    inputComponent.simulate("change",mockEvent);

  })

  test("donation input field change testing",()=> {
    expect(mockUserid).toHaveBeenCalledWith(10);
  })

  test("donation input field data clear once submit form",()=> {

    const submitComponent = findByTestAttr(wrapper,"form-button")
    submitComponent.simulate('click',{ preventDefault() {}})
    expect(mockUserid).toHaveBeenCalledWith(10);
  })

})

describe("State controlled tip input field",() => {
  let mockUserid = jest.fn();
  let wrapper;

  beforeEach(() => {
    mockUserid.mockClear();
    React.useState = () => ["",mockUserid]
    wrapper = setup({});
    const inputComponent = findByTestAttr(wrapper,"tip-field-input");
    const mockEvent = { target: { value: 10 }}
    inputComponent.simulate("change",mockEvent);

  })

  test("tip input field change testing",()=> {
    expect(mockUserid).toHaveBeenCalledWith(10);
  })

  test("tip input field data clear once submit form",()=> {

    const submitComponent = findByTestAttr(wrapper,"form-button")
    submitComponent.simulate('click',{ preventDefault() {}})
    expect(mockUserid).toHaveBeenCalledWith(10);
  })

})

describe("State controlled form error field",() => {
  let mockUserid = jest.fn();
  let wrapper;

  beforeEach(() => {
    mockUserid.mockClear();
    React.useState = () => ["",mockUserid]
    wrapper = setup({});
  

  })

  test("form error details",()=> {
    const inputComponent = findByTestAttr(wrapper,"userid-field-input");
    const mockEvent = { target: { value: ""}}
    inputComponent.simulate("change",mockEvent);

    const submitComponent = findByTestAttr(wrapper,"form-button")
    submitComponent.simulate('click',{ preventDefault() {}})

    const formError = findByTestAttr(wrapper,"form-error");
    expect(formError.length).toBe(1)


  })

})

