import { combineReducers } from "redux";
import contactReducer from "./Contact/ContactReducer";
import registerReducer from "./Register/RegisterReducer";


const rootReducer = combineReducers({
    contact: contactReducer,
    register: registerReducer
});

export default rootReducer;