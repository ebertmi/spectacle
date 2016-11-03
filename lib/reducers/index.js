import { combineReducers } from "redux";
import fragment from "./fragment";
import route from "./route";

var rootReducer = combineReducers({
  fragment: fragment,
  route: route
});

export default rootReducer;