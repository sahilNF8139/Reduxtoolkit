import axios from "axios";

import {
  // IS_LOADING,
  baseURL,
  Basic_URL,
  basicreducer,
  getDetailsURL,
  getReg,
  login_URL,
  Loginreducer,
  now_URL,
  nowreducer,
  nowintroget,
  duction


} from "../../Constant";

function getAsios() { 
  let token = localStorage.getItem("token");

  if (token) {
    return axios.create({
      baseURL: baseURL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } else {
    return axios.create({
      baseURL: baseURL,

      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}

const tokenexpire = "Your token has expired! Please sign in again.";
// export function saveTokenInLocalStorage(tokenDetails) {
//   localStorage.setItem("token", JSON.stringify(tokenDetails));
// }

// export function dispatchLoadingStatus(loading) {
//   return function (dispatch, getState) {
//     dispatch({ type: IS_LOADING, payload: { loading: loading } });
//   };
// }


export function getDataAPI(data) {
  
  return function (dispatch) {
    return getAsios()
      .get(login_URL, data)
      .then((response) => {
        // debugger

        dispatch({ type: getReg, payload: response.data });
        return;
      })
      .catch((err) => {
        // toast.error("Something went wrong, please try again", {
        //     style: { fontSize: 14 },
        //     autoClose: 3000
        // });

      });
  };
}


export function NowAPi_get(data){
  return function (dispatch){
    return getAsios()
      .get(nowintroget + data) 
      .then((response) => {
        // debugger
        dispatch({ type: duction, payload: response.data }); 
        console.log("now response",response);
        return;
      })
      .catch((err) => {
        // toast.error("Something went wrong, please try again", {
        //     style: { fontSize: 14 },
        //     autoClose: 3000
        // });

      });
  };
}



export function postAPI(data) {   
  return function (dispatch) {
    return getAsios()
      .post(now_URL, data)
      .then((response) => {
        console.log("res", response);

        dispatch({ type: nowreducer, payload: response.data });
        return;
      })
      .catch((err) => {
        // toast.error("Something went wrong, please try again", {
        //     style: { fontSize: 14 },
        //     autoClose: 3000
        // });

      });
  };
}
export function newpostAPI(data) {   
  return function (dispatch) {
    return getAsios()
      .post(Basic_URL, data)
      .then((response) => {
        console.log("newres", response);

        dispatch({ type: basicreducer, payload: response.data });
        return;
      })
      .catch((err) => {
        // toast.error("Something went wrong, please try again", {
        //     style: { fontSize: 14 },
        //     autoClose: 3000
        // });

      });
  };
}
