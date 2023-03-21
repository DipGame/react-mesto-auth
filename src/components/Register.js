import * as RegisterAuth from '../RegisterAuth.js';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/Vector.svg';

export default function Register(props) {

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
        
        console.log('hiSub');
        RegisterAuth.register(formValue.email, formValue.password)
            .then((data) => {
                props.good();
                console.log(data);
                navigate('/sign-in', { replace: true });
            })
            .catch((err) => {
                console.log(err)
                props.noGood();
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
                <Link to='/sign-in' className='header__reg'>Войти</Link>
            </header>
            <div className="sign">
                <h2 className="sign__title">Регистрация</h2>
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
                <button type="submit" onClick={handleSubmit} className="sign__button">Зарегистрироваться</button>
                <h3 className='sign__answer'>Уже зарегистрированы? <Link className='sign__link' to='/sign-in' >Войти</Link></h3>
            </div>
        </>
    );
}