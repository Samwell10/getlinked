import { REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FALIURE } from "./RegisterType";
  
  const initialState = {
    loading: false,
    register: [],
    error: "",
  };
  
  const registerReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_REQUEST:
        return {
          loading: true,
          register: [],
          error: "",
        };
    
      case REGISTER_SUCCESS:
        return {
          loading: false,
          register: action.payload,
          error: "",
        };
      case REGISTER_FALIURE:
        return {
          loading: false,
          register: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default registerReducer;