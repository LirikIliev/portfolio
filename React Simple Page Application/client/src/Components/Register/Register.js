import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { registerUser } from '../../service/userService';
import { AuthContext } from '../../context/AurhContext';

import style from './Register.module.css';

function Register() {
    const { userLogin } = useContext(AuthContext);
    let Navigate = useNavigate()

    const [value, setValue] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            repeatPassword: '',
        }
    );

    const [validate, setValidate] = useState(
        {
            'firstName': false,
            'lastName': false,
            'email': false,
            'password': false,
            'repeatPassword': false,
        }
    );

    const isValid = Object.values(validate)
        .some(x => x !== true);

    function onChangeFunctionHandler(e) {
        onChangeValue(e);
        validatorFunction(e);
    }

    function onChangeValue(e) {
        setValue(state => ({ ...state, [e.target.name]: e.target.value.trim() }))
    };

    function validatorFunction(e) {
        if (e.target.name === 'firstName') {
            if (e.target.value.length >= 3) {
                setValidate(state => ({ ...state, [e.target.name]: true }));
            } else {
                setValidate(state => ({ ...state, [e.target.name]: false }));
            }
        } else if (e.target.name === 'lastName') {
            if (e.target.value.length >= 3) {
                setValidate(state => ({ ...state, [e.target.name]: true }));
            } else {
                setValidate(state => ({ ...state, [e.target.name]: false }));
            }
        } else if (e.target.name === 'email') {
            let regexp = /^\w+@\w+\.[a-zA-z]+$/g;
            let match = e.target.value.match(regexp);
            if (match) {
                setValidate(state => ({ ...state, [e.target.name]: true }));
            } else {
                setValidate(state => ({ ...state, [e.target.name]: false }));
            }
        } else if (e.target.name === 'password') {
            if (e.target.value.length >= 3) {
                setValidate(state => ({ ...state, [e.target.name]: true }));
            } else {
                setValidate(state => ({ ...state, [e.target.name]: false }));
            }
        } else if (e.target.name === 'repeatPassword') {
            if (e.target.value === value.password && e.target.value !== '') {
                setValidate(state => ({ ...state, [e.target.name]: true }));
            } else {
                setValidate(state => ({ ...state, [e.target.name]: false }));
            }
        };
    };

    async function onSubmitRegister(e) {
        e.preventDefault();
        try {
            let userData = await registerUser(value);
            userLogin(userData);
            Navigate("/");
        } catch (err) {
            Navigate('/login');
        }
    };

    return (
        <section className={style["registration"]}>
            <h1 className={style["registration-title"]}>Become a part of us!</h1>
            <form className={style["registration-form"]} onSubmit={onSubmitRegister}>
                <div className={style["register-form-box"]}>
                    <label
                        htmlFor="firstName"
                        className={`${style["register-label"]} ${style["required"]}`}>
                        First name:
                    </label>
                    <div className={style["value-box"]}>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            onChange={onChangeFunctionHandler}
                            value={value.firstName}
                        />
                        {!validate.firstName
                            ? <div className={style["error-box"]}>Use at least 3 characters long first name!</div>
                            : ""
                        }
                    </div>
                </div>
                <div className={style["register-form-box"]}>
                    <label
                        htmlFor="lastName"
                        className={`${style["register-label"]} ${style["required"]}`}>
                        Last name:
                    </label>
                    <div className={style["value-box"]}>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            onChange={onChangeFunctionHandler}
                            value={value.lastName}
                        />
                        {!validate.lastName
                            ? <div className={style["error-box"]}>Use at least 3 characters long last name!</div>
                            : ""
                        }
                    </div>
                </div>
                <div className={style["register-form-box"]}>
                    <label
                        htmlFor="email"
                        className={`${style["register-label"]} ${style["required"]}`}>
                        Email:
                    </label>
                    <div className={style["value-box"]}>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={onChangeFunctionHandler}
                            value={value.email}
                        />
                        {!validate.email
                            ? <div className={style["error-box"]}>Use correct email address!</div>
                            : ""
                        }
                    </div>
                </div>
                <div className={style["register-form-box"]}>
                    <label
                        htmlFor="password"
                        className={`${style["register-label"]} ${style["required"]}`}>
                        Password:
                    </label>
                    <div className={style["value-box"]}>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={onChangeFunctionHandler}
                            value={value.password}
                        />
                        {!validate.password
                            ? <div className={style["error-box"]}>Use at least 3 character long password!</div>
                            : ""
                        }
                    </div>
                </div>
                <div className={style["register-form-box"]}>
                    <label
                        htmlFor="repeatPassword"
                        className={`${style["register-label"]} ${style["required"]}`}>
                        Repeat password:
                    </label>
                    <div className={style["value-box"]}>
                        <input
                            type="password"
                            name="repeatPassword"
                            id="repeatPassword"
                            onChange={onChangeFunctionHandler}
                            value={value.repeatPassword}
                        />
                        {!validate.repeatPassword
                            ? <div className={style["error-box"]}>Repeat you password please!!!</div>
                            : ""
                        }
                    </div>
                </div>
                <div className={`${style["register-form-box"]} ${style["submit"]}`}>
                    {
                        isValid
                            ? <input
                                type="submit"
                                defaultValue="Registration"
                                className={style["submit-button"]}
                                disabled
                            />
                            : <input
                                type="submit"
                                defaultValue="Registration"
                                className={style["submit-button"]}
                            />
                    }
                </div>
            </form>
        </section>
    );
};

export default Register;