import Home from "./Home";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<Home />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

describe("Render Home Compoenent without error", () => {
  
  test("render without error", () => {
    const wrapper = setup();
    // console.log(wrapper.debug());

    const homeComponent = findByTestAttr(wrapper, "component-home");
    expect(homeComponent.length).toBe(1);
  });

  test("render the heading", () => {
    const wrapper = setup();
    const homeComponent = findByTestAttr(wrapper, "home-heading");
    expect(homeComponent.length).toBe(1);
  });

  test("render the heading text", () => {
    const wrapper = setup();
    const heading = findByTestAttr(wrapper, "home-heading").text();
    expect(heading).toBe("Donation Application");
  });

  test("render the image", () => {
    const wrapper = setup();
    const homeComponent = findByTestAttr(wrapper, "home-img");
    expect(homeComponent.length).toBe(1);
  });


});
