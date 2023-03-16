import RegisterAuth from '../RegisterAuth.js';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignForm from "./SignForm.js";

export default function Login(props) {

  return (
    <>
      <SignForm auth={RegisterAuth} headerReg='Регистрация' title='Вход' buttonText='Вход' answer='' linkTo='/sign-up' />
    </>
  );
}