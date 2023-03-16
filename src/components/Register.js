import RegisterAuth from '../RegisterAuth.js';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignForm from './SignForm.js';

export default function Register(props) {

    return (
        <>
            <SignForm auth={RegisterAuth} headerReg='Вход' title='Регистрация' buttonText='Зарегистрироваться' answer='Уже зарегистрированы?' linkTo='/sign-in' link='Войти' />
        </>
    );
}