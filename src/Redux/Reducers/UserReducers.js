import { CLEAR_ERRORS, DELETE_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_RESET, DELETE_USER_SUCCESS, FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, RESET_PASSWORD_FAIL, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAIL, UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_RESET, UPDATE_PASSWORD_SUCCESS, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_RESET, UPDATE_PROFILE_SUCCESS, UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_RESET, UPDATE_USER_SUCCESS } from "../Constants/UserConstants";

export const loginReducer=(state ={users:[]},action)=>{
switch (action.type) {
    case LOGIN_REQUEST:
      return{
            loading:true,
            isAnthentication:false,
        }
        case LOGOUT_SUCCESS:
            return {
              loading: false,
              user: null,
              isAuthenticated: false,
            };
case LOGIN_SUCCESS:
    
    return{
        ...state,
        loading:false,
        isAnthentication:true,
        user:action.payload
    }
    case LOGIN_FAIL:
        return{
            loading:true,
            isAnthentication:false,
            user:null,
            error:action.payload
        }
        
            case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
        case CLEAR_ERRORS:
            return {
              ...state,
              error: null,
            };
      
          default:
            return state;
}

}

