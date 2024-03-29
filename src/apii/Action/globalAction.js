import swal from "sweetalert";
import axios from "axios";

import {
  IS_LOADING,
  baseURL,
  AdminLogin_URL,
  AdminLoginReg,
  getfreelancers_URL,
  getfreelancersReg,


} from "../../Constant";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

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
export function saveTokenInLocalStorage(tokenDetails) {
  localStorage.setItem("token", JSON.stringify(tokenDetails));
}

export function dispatchLoadingStatus(loading) {
  return function (dispatch, getState) {
    dispatch({ type: IS_LOADING, payload: { loading: loading } });
  };
}


export function LoginAPI(data, email, name) {
  return function (dispatch) {
    return getAsios()
      .post(AdminLogin_URL, data)

      .then((response) => {
        dispatch(dispatchLoadingStatus(false));

        if (response.data.errorcode == 0) {
          debugger;

          dispatch({ type: AdminLoginReg, payload: response.data });

          toast.success("Login Successfully");
          // swal("Login!", "Login Successfully!", "success");
          localStorage.setItem("superr", response.data.data.is_super_admin);

          localStorage.setItem("emailAdmin", email);
          localStorage.setItem("nameAdmin", response.data.data.name);

          localStorage.setItem(AdminLogin_URL, true);
          localStorage.setItem("token", response.data.tokan);
          localStorage.setItem("newRoleVissible", response.data.data.roles);
        } else {
          dispatch(dispatchLoadingStatus(false));
          // toast.error(response.data.message)
          swal("", response.data.message, "error");
        }
      })

      .catch((err) => {
        dispatch(dispatchLoadingStatus(false));
        // toast.error("Something went wrong, please try again", {
        //     style: { fontSize: 14 },
        //     autoClose: 3000
        // }
        // );

        swal("", "Something went wrong, please try again", "error");
      });
  };
}

export function getfreelancersAPI(data) {
  return function (dispatch) {
    return getAsios()
      .post(getfreelancers_URL, data)
      .then((response) => {
        // localStorage.setItem('FRlist', false)
        localStorage.setItem("Addpeople", false);
        localStorage.setItem("getfreelancersAPIAttandence", false);

        dispatch(dispatchLoadingStatus(false));
        // dispatch(dispatchLoadingStatus(false));
        // localStorage.setItem('token' , response.data.data.token);

        // if (response.data.errorcode == 0) {

        // }
        // else {
        //     toast.error(response.data.message, {
        //         style: { fontSize: 14 },
        //         autoClose: 3000
        //     });

        //     // alert(response.data.message)

        // }

        dispatch({ type: getfreelancersReg, payload: response.data });
        return;
      })
      .catch((err) => {
        // localStorage.setItem('FRlist', false)
        localStorage.setItem("Addpeople", false);
        localStorage.setItem("getfreelancersAPIAttandence", false);

        dispatch(dispatchLoadingStatus(false));
        // toast.error("Something went wrong, please try again", {
        //     style: { fontSize: 14 },
        //     autoClose: 3000
        // });

        swal("", "Something went wrong, please try again", "error");
      });
  };
}
