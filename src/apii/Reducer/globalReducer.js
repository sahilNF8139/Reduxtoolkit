
import {
  LoginReg, sendOtpReg, AdminLoginReg

} from '../../Constant';


let defaultState = {


  LoginReg: null,
  sendOtpReg: null,
  AdminLoginReg: null,

}

const globalReducer = (state = defaultState, action) => {

  switch (action.type) {


    case LoginReg:
      return Object.assign({}, state, {
        LoginReg: action.payload
      });

    case sendOtpReg:
      return Object.assign({}, state, {
        sendOtpReg: action.payload
      });

           
              
            

    default:
      return state;
  }



};
export default globalReducer;

