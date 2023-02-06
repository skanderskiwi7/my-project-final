import axios from "axios";

const _URL = "http://localhost:5003";

export const sendMsg = (msg) => {
  console.log("message", msg);
  axios
    .post(_URL + "/contact", msg)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

export const newCar = (car) => {
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", car);
  axios
    .post(_URL + "/car", car)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};
export const api_login = async (credentials) => {
  try {
    const api = axios.create({
      // withCredentials: true,
      // headers: {
      //   "Content-type": "application/json",
      // },
    });

    const response = await api.post(_URL + "/auth/user/login", credentials, {
      // withCredentials: true,
    });

    // localStorage.setItem("email", JSON.stringify(response.data.email));
    console.log("xxxxxx", response);
    return response.data;
  } catch (err) {
    console.log("yyyyyy", err);
    return err.response.data;
  }
};

export const api_signup = async (credentials) => {
  try {
    const response = await axios.post(_URL + "/auth/user/signup", credentials);
    // localStorage.setItem("email", JSON.stringify(response.data.email));
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const api_logout = async () => {
  console.log("api_logout");
  // remove localstorage
  localStorage.removeItem("email");
  // remove cookies
  // redirect to home
};
