import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const containsLetters = /[a-zA-Z]/;
const containsNumbers = /[0-9]/;

const SignInScreen = () => {

  const [loginDetails, setLoginDetails] = useState({
    userEmail: '',
    userPassword: '',
  });

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginDetails.userEmail !== null &&
      loginDetails.userPassword !== null &&
      containsLetters.test(loginDetails.userPassword) &&
      containsNumbers.test(loginDetails.userPassword)) {
      onSubmit({
        login: loginDetails.userEmail,
        password: loginDetails.userPassword,
      });
    } else {
      toast.warn('Пароль не валидный! Пароль должен состоять минимум из одной латинской буквы и цифры.');
    }
  };

  const changeLogin = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();

    const { name, value } = evt.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.Main} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={handleSubmit}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                onChange={changeLogin}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="userEmail"
                id="user-email"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                onChange={changeLogin}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="userPassword"
                id="user-password"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <footer className="page-footer">
        <div className="logo">
          <Link to={AppRoute.Main} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default SignInScreen;
