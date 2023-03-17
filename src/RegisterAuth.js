export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (userEmail, userPass) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: userEmail,
      password: userPass
    })
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.log(err));
};

export const login = (userEmail, userPass) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: userEmail,
      password: userPass
    })
  })
    .then((response => response.json()))
    .then((data) => {
      if (data.jwt) {
        localStorage.setItem('jwt', data.jwt);
        console.log(localStorage.setItem('jwt', data.jwt));
        return data;
      }
    })
    .catch((err) => console.log(err));
};