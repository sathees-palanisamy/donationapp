import { combineReducers } from "redux";
import donationReducer from './donationReducer';


export default combineReducers({
  donation: donationReducer,
});
