import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { loginUser } from '../../service/userService';

import { AuthContext } from '../../context/AurhContext';

import style from './Login.module.css';

function Login() {
    const { userLogin } = useContext(AuthContext);
    let Navigate = useNavigate();

    const [value, setValue] = useState(
        {
            email: '',
            password: '',
        }
    );
    const [invalidLogin, setInvalidLogin] = useState(
        {
            email: false,
            password: false,
        }
    );

    const isValid = Object.values(invalidLogin)
        .some(x => x !== true);

    function onChangeFunctionHandler(e) {
        onChangeLoginValue(e);
        validatorFunction(e);
    }

    function onChangeLoginValue(e) {
        setValue(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    function validatorFunction(e) {
        if (e.target.name === 'email') {
            let regexp = /^\w+@\w+\.[a-zA-z]+$/g;
            let match = e.target.value.match(regexp);
            if (match) {
                setInvalidLogin(state => ({ ...state, [e.target.name]: true }));
            } else {
                setInvalidLogin(state => ({ ...state, [e.target.name]: false }));
            };
        } else if (e.target.name === 'password') {
            if (e.target.value) {
                setInvalidLogin(state => ({ ...state, [e.target.name]: true }));
            } else {
                setInvalidLogin(state => ({ ...state, [e.target.name]: false }));
            };
        };
    };

    async function onSubmitLogin(e) {
        e.preventDefault();
        try {
            let userData = await loginUser(value);
            userLogin(userData);
            Navigate("/")
        } catch (err) {
            Navigate('/register')
        }
    };

    return (
        <section className={style["login"]}>
            <h1 className={style["login-title"]}>Hello again!!!</h1>
            <form className={style["login-form"]} onSubmit={onSubmitLogin}>
                <div className={style["login-form-box"]}>
                    <label
                        htmlFor="email"
                        className={`${style["login-label"]} ${style["required"]}`}>
                        Email:
                    </label>
                    <div className={style["value-box"]}>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={onChangeFunctionHandler}
                        />
                        {!invalidLogin.email
                            ? <div className={style["error-box"]}>Please you correct email address!</div>
                            : ""
                        }
                    </div>
                </div>
                <div className={style["login-form-box"]}>
                    <label
                        htmlFor="password"
                        className={`${style["login-label"]} ${style["required"]}`}>
                        Password:
                    </label>
                    <div className={style["value-box"]}>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={onChangeFunctionHandler}
                        />
                        {!invalidLogin.password
                            ? <div className={style["error-box"]}>Please fill the field correctly!</div>
                            : ""
                        }
                    </div>
                </div>
                <div className={`${style["login-form-box"]} ${style["submit"]}`}>
                    {isValid
                        ? <input
                            type="submit"
                            className={style["submit-button"]}
                            disabled />
                        : <input
                            type="submit"
                            className={style["submit-button"]} />
                    }
                </div>
            </form>
        </section>
    )
};

export default Login;