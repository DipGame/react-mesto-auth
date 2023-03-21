export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (userEmail, userPass) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password: userPass,
      email: userEmail
    })
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    })
    
};

export const authorize = (userEmail, userPass) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password: userPass,
      email: userEmail
    })
  })
  .then((response => response.json()))
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => res.json())
    .then(data => data)
}