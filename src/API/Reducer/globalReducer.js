
import {
  basicreducer,
  getReg,
  Loginreducer,
  nowreducer,
  duction



} from '../../Constant';


let defaultState = {
  getReg: null,
  Loginreducer: null,
  rowreducer:null,
  basicreducer:null,
  duction:null

}

const globalReducer = (state = defaultState, action) => {
  switch (action.type) {

    case getReg:
      return Object.assign({}, state, {
        getReg: action.payload
      });

      case Loginreducer:
        return Object.assign({}, state, {
          Loginreducer: action.payload
        });
        case nowreducer:
          return Object.assign({}, state, { 
            rowreducer: action.payload
          });
          case basicreducer:
          return Object.assign({}, state, { 
            basicreducer: action.payload
          });
          case duction:
          return Object.assign({}, state, {
            duction: action.payload
          
          });


        // case getipa:
        //   return Object.assign({}, state, {
        //     Loginreducer: action.payload
        //   });

    default:
      return state;
  }



};
export default globalReducer;