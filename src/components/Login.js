import React, { useState } from 'react';
import * as RegisterAuth from '../RegisterAuth.js';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/Vector.svg';


export default function Login({ handleLogin, ...props }) {

  const BASE_URL = 'https://auth.nomoreparties.co';

  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hiSudb');
    RegisterAuth.authorize(formValue.email, formValue.password)
      .then((data) => {
        if (data.token) {
          console.log(data.token);
          setFormValue({ email: '', password: '' });
          navigate('/', { replace: true });
          localStorage.setItem('jwt', data.token);
          handleLogin();
      return data;
        } else {
          props.noGood();
        console.log('higoodpiss')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    <>
      <header className="header">
        <img
          className="header__logo"
          src={logo}
          alt="Россия"
        />
        <Link to='/sign-up' className='header__reg'>Регистрация</Link>
      </header>
      <div className="sign">
        <h2 className="sign__title">Вход</h2>
        <input
          className="sign__mail"
          id="signRegMail"
          value={formValue.email}
          type="email"
          name="email"
          placeholder="Email"
          required=""
          onChange={handleChange}>
        </input>
        <input
          className="sign__pass"
          id="signRegPass"
          value={formValue.password}
          type="password"
          name="password"
          placeholder="Пароль"
          required=""
          onChange={handleChange}>
        </input>
        <button type="submit" onClick={handleSubmit} className="sign__button">Вход</button>
      </div>
    </>
  );
}