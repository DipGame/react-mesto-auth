export default function RegisterAuth(email, password) {
    console.log('hi');
  return fetch('https://auth.nomoreparties.co/singup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((response) => {
    try {
      if (response.status === 200){
        console.log(response);
        return response.json();
      }
    } catch(e){
      console.log(e);
      return (e)
    }
  })
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err));
};