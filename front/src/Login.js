import React, {useState} from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import "./Login.scss";

function Login() {
  const [screen, setScreen] = useState('start');

  if (screen === 'start') {
    return (
      <div className="login-welcome">
        {/* todo анимация переключения */}
        <div className="login-welcome__bg">
          <h1>NOPE ОНЛАЙН</h1>
          <button type="button" onClick={() => setScreen('form')}>Вход</button>
        </div>
      </div>
    );
  }

  if (screen === 'form') {
    return (
      <div className="login">
        <form className="login__form" onSubmit={() => setScreen('redirect')}>
          <div className="login__inputs">
            <input type="text" name="login" placeholder="Логин" />
            <input type="password" name="pass" placeholder="Пароль" />
          </div>
          <button type="submit">Войти</button>
        </form>
      </div>
    )
  }

  return <Redirect to="/hr/welcome/" /> 
}

export default withRouter(Login);
