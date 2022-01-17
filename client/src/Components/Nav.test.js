import Nav from "./Nav";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<Nav />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

describe("Render Nav Compoenent without error", () => {
  
  test("render without error", () => {
    const wrapper = setup();

    const homeComponent = findByTestAttr(wrapper, "nav-head");
    expect(homeComponent.length).toBe(1);
  });




});
