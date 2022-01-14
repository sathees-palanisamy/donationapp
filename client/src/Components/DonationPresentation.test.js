import DonationPresentation from "./DonationPresentation";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import propTypes from "prop-types";
import checkPropTypes from "check-prop-types";

Enzyme.configure({ adapter: new EnzymeAdapter() });


const defaultProps = { id:0,amount:0,tip:0,userid:"0" };

const setup = (props={}) => { 
  const setupProps = { ...defaultProps, ...props}
  return shallow(<DonationPresentation {...setupProps} />);
}

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

describe("render the donation presentation Component", () => {

  test("render without error", () => {
    const wrapper = setup();
    const donationComponent = findByTestAttr(wrapper, "donation-presentation");
    expect(donationComponent.length).toBe(0);
  });

  test("Component will not render for zero donation", () => {
    const wrapper = setup({amount:0});
    const donationComponent = findByTestAttr(wrapper, "donation-presentation");
    expect(donationComponent.length).toBe(0);
  });

  test("render card body for non zero donation amount", () => {
    const wrapper = setup({amount:10});
    const donationComponent = findByTestAttr(wrapper, "Card--body");
    expect(donationComponent.length).toBe(1);
  });

  test("render amount for non zero donation amount", () => {
    const wrapper = setup({amount:10});
    const donationComponent = findByTestAttr(wrapper, "Card--body-title");
    expect(donationComponent.length).toBe(1);
  });

  test("render tip for non zero donation amount", () => {
    const wrapper = setup({amount:10});
    const donationComponent = findByTestAttr(wrapper, "Card--body-tip");
    expect(donationComponent.length).toBe(1);
  });

  test("render userid for non zero donation amount", () => {
    const wrapper = setup({amount:10});
    const donationComponent = findByTestAttr(wrapper, "Card--body-userid");
    expect(donationComponent.length).toBe(1);
  });

  test("render button for non zero donation amount", () => {
    const wrapper = setup({amount:10});
    const donationComponent = findByTestAttr(wrapper, "Card__button");
    expect(donationComponent.length).toBe(1);
  });


});

describe("Props type testing", () => {

  const expectedProps = {id:1,amount:100,tip:5,userid:"1"};
  
  test("checking the props type for ID", () => {

    const propError = checkPropTypes(
      DonationPresentation.propTypes,
      expectedProps,
      "prop",
      DonationPresentation.id
    );
    expect(propError).toBeUndefined();
  });

  test("checking the props type for amount", () => {
 
    const propError = checkPropTypes(
      DonationPresentation.propTypes,
      expectedProps,
      "prop",
      DonationPresentation.amount
    );
    expect(propError).toBeUndefined();
  });

  test("checking the props type for tip", () => {
    const propError = checkPropTypes(
      DonationPresentation.propTypes,
      expectedProps,
      "prop",
      DonationPresentation.tip
    );
    expect(propError).toBeUndefined();
  });

  test("checking the props type for userid", () => {
    const propError = checkPropTypes(
      DonationPresentation.propTypes,
      expectedProps,
      "prop",
      DonationPresentation.userid
    );
    expect(propError).toBeUndefined();
  });

  test("checking the props type for deletion", () => {
    const propError = checkPropTypes(
      DonationPresentation.propTypes,
      expectedProps,
      "prop",
      DonationPresentation.deleteDonation
    );
    expect(propError).toBeUndefined();
  });

});
