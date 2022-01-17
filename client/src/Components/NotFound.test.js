import NotFound from "./NotFound";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<NotFound />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

describe("Render NotFound Compoenent without error", () => {
  
  test("render without error", () => {
    const wrapper = setup();

    const homeComponent = findByTestAttr(wrapper, "not-found");
    expect(homeComponent.length).toBe(1);
  });




});
