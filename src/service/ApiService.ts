import {API_BASE_URL} from "../app-config";

export function call(api: string, method: string, request: object | null) {
  let headers = new Headers({
    "Content-Type": "application/json",
  })
  // 로컬스토리지
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken) {
    headers.append("Authorization", "Bearer " + accessToken);
  }

  let options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
    body: ""
  };
  if (request) {
    // GET method
    options.body = JSON.stringify(request);
  }
  return fetch(options.url, options)
    .then((response) =>
      response.json().then((json) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
    )
    .catch((error) => {
      console.log(error.status);
      if (error.status === 403) {
        window.location.href = "/login";
      }
      return Promise.reject(error);
    });
}

export interface userDTO {
  email: string;
  password: string;
}

export function signin(userDTO: userDTO) {
  return call("/auth/signin", "POST", userDTO)
    .then((response) => {
      console.log("response : ", response);
      if (response.token) {
        localStorage.setItem("ACCESS_TOKEN", response.token);
        window.location.href = "/";
      }
    })
}

export function signout() {
  localStorage.setItem("ACCESS_TOKEN", "");
  window.location.href = "/login";
}

export function signup(userDTO: userDTO) {
  return call("/auth/signup", "POST", userDTO);
}