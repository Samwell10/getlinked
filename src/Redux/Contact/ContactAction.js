import { CONTACT_REQUEST, CONTACT_SUCCESS, CONTACT_FALIURE} from "./ContactType";
import axios from "axios"
export const contactRequest = () =>{
    return{
        type: CONTACT_REQUEST
    }
}

export const contactSuccess = (response) =>{
    return{
        type: CONTACT_SUCCESS,
        payload: response
    }
}

export const contactFaliure = (error) =>{
    return{
        type: CONTACT_FALIURE,
        payload: error
    }
}
const baseUrl = "https://backend.getlinked.ai"

export const postcontact = (nameState, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(contactRequest())
        const headers = {
            "Content-Type": "application/json",
        };
        try{
            const response =  await axios.post(`${baseUrl}/hackathon/contact-form`, nameState,
            { headers: headers })
            const data = response
            dispatch(contactSuccess(data))
            if(response.status===201){
                history();
            }
        }
        catch(error) {
            const errorMsg = error.message
            dispatch(contactFaliure(errorMsg))
            setErrorHandler({ hasError: true, message: error?.response?.data?.message });
        }
    }
}
