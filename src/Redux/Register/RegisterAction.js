import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FALIURE } from "./RegisterType"
import axios from "axios"
export const registerRequest = () =>{
    return{
        type: REGISTER_REQUEST
    }
}

export const registerSuccess = (response) =>{
    return{
        type: REGISTER_SUCCESS,
        payload: response
    }
}

export const registerFaliure = (error) =>{
    return{
        type: REGISTER_FALIURE,
        payload: error
    }
}
const baseUrl = "https://backend.getlinked.ai"

export const postregister = (nameState, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(registerRequest())
        const headers = {
            "Content-Type": "application/json",
        };
        try{
            const response =  await axios.post(`${baseUrl}/hackathon/registration`, nameState,
            { headers: headers })
            const data = response
            dispatch(registerSuccess(data))
            if(response.status===201){
                history();
            }
        }
        catch(error) {
            const errorMsg = error.message
            dispatch(registerFaliure(errorMsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}
