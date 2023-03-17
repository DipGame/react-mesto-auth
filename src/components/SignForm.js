import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/Vector.svg';


export default function SignForm(props) {

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
        props.auth( formValue.email, formValue.password ).then((res) => {
            navigate('/sign-in', { replace: true });
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
                <Link to={props.linkTo} className='header__reg'>{props.headerReg}</Link>
            </header>
            <div className="sign">
                <h2 className="place__title sign__title">{props.title}</h2>
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
                <button type="submit" onClick={handleSubmit} className="sign__button">{props.buttonText}</button>
                <h3 className='sign__answer'>{props.answer} <Link className='sign__link' to={props.linkTo} >{props.link}</Link></h3>
            </div>
        </>
    );
}