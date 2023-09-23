import { CONTACT_REQUEST, CONTACT_SUCCESS, CONTACT_FALIURE} from "./ContactType";
  
  const initialState = {
    loading: false,
    contact: [],
    error: "",
  };
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case CONTACT_REQUEST:
        return {
          loading: true,
          contact: [],
          error: "",
        };
    
      case CONTACT_SUCCESS:
        return {
          loading: false,
          contact: action.payload,
          error: "",
        };
      case CONTACT_FALIURE:
        return {
          loading: false,
          contact: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default contactReducer;