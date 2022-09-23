import style from "./Create.module.css";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ErrorContext } from "../../context/ErrorContext";

import { createTrip } from "../../service/tripService";

function Create() {
    const Navigate = useNavigate();
    const { setError } = useContext(ErrorContext);

    const [value, setValue] = useState(
        {
            author: '',
            country: '',
            destination: '',
            imageUrl: '',
            description: '',
        }
    );

    const [validatorValue, setValidatorValue] = useState(
        {
            author: false,
            country: false,
            destination: false,
            imageUrl: false,
            description: false,
        }
    );

    const isValid = Object.values(validatorValue).some(x => x == false);

    async function onSubmitData(e) {
        e.preventDefault();
        const tripResult = {
            author: value.author.trim(),
            country: value.country.trim(),
            destination: value.destination.trim(),
            imageUrl: value.imageUrl.trim(),
            description: value.description.trim(),
        };
        if (!isValid) {
            try {
                await createTrip(tripResult);
                Navigate('/');
            } catch (err) {
                setError(err);
                console.log(err.message);
            };
        };
    };

    function onChangeFunctionHandler(e) {
        onChangeValue(e);
        validator(e);
    };

    function onChangeValue(e) {
        setValue(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    function validator(e) {
        if (e.target.name == 'author') {
            if (e.target.value.length >= 5) {
                setValidatorValue(state => ({ ...state, [e.target.name]: true }))
            } else {
                setValidatorValue(state => ({ ...state, [e.target.name]: false }))
            }
        } else if (e.target.name == 'country') {
            if (e.target.value.length >= 4) {
                setValidatorValue(state => ({ ...state, [e.target.name]: true }))
            } else {
                setValidatorValue(state => ({ ...state, [e.target.name]: false }))
            }
        } else if (e.target.name == 'destination') {
            if (e.target.value.length >= 5) {
                setValidatorValue(state => ({ ...state, [e.target.name]: true }))
            } else {
                setValidatorValue(state => ({ ...state, [e.target.name]: false }))
            }
        } else if (e.target.name == 'imageUrl') {
            let regexp = /^https:\/\/|http:\/\//g;
            let match = e.target.value.match(regexp);
            if (match) {
                setValidatorValue(state => ({ ...state, [e.target.name]: true }))
            } else {
                setValidatorValue(state => ({ ...state, [e.target.name]: false }))
            }
        } else if (e.target.name == 'description') {
            if (e.target.value.length >= 20) {
                setValidatorValue(state => ({ ...state, [e.target.name]: true }))
            } else {
                setValidatorValue(state => ({ ...state, [e.target.name]: false }))
            }
        };
    };

    return (
        <section className={style["create"]}>
            <h1 className={style["create-title"]}>Share your adventure!!!</h1>
            <form className={style["create-form"]} onSubmit={onSubmitData} >
                <div className={style["create-form-box"]}>
                    <label htmlFor="author" className={`${style["create-label"]} ${style["required"]}`}>
                        Author:
                    </label>
                    <div className={style["value-box"]}>
                        <input
                            type="text"
                            name="author"
                            onChange={onChangeFunctionHandler}
                            id="author"
                            value={value.author}
                        />
                        {!validatorValue.author
                            ? <div className={style["error-box"]}>It must be at least 5 characters</div>
                            : ""
                        }
                    </div>
                </div>
                <div className={style["create-form-box"]}>
                    <label htmlFor="country" className={`${style["create-label"]} ${style["required"]}`}>
                        Country:
                    </label>
                    <div className={style["value-box"]}>
                        <input
                            type="text"
                            name="country"
                            onChange={onChangeFunctionHandler}
                            id="country"
                            value={value.country}
                        />
                        {!validatorValue.country
                            ? <div className={style["error-box"]}>It must be at least 4 characters</div>
                            : ""
                        }
                    </div>
                </div>
                <div className={style["create-form-box"]}>
                    <label htmlFor="destination" className={`${style["create-label"]} ${style["required"]}`}>
                        Destination name:
                    </label>
                    <div className={style["value-box"]}>
                        <input
                            type="text"
                            name="destination"
                            onChange={onChangeFunctionHandler}
                            id="destination"
                            value={value.destination}
                        />
                        {!validatorValue.destination
                            ? <div className={style["error-box"]}>It must be at least 5 characters</div>
                            : ""
                        }
                    </div>
                </div>
                <div className={style["create-form-box"]}>
                    <label htmlFor="imageUrl" className={`${style["create-label"]} ${style["required"]}`}>
                        Image Url:
                    </label>
                    <div className={style["value-box"]}>
                        <input
                            type="url"
                            name="imageUrl"
                            onChange={onChangeFunctionHandler}
                            id="imageUrl"
                            value={value.imageUrl}
                        />
                        {!validatorValue.imageUrl
                            ? <div className={style["error-box"]}>It must be URL address</div>
                            : ""
                        }
                    </div>
                </div>
                <div className={style["create-form-box"]}>
                    <label htmlFor="description" className={`${style["create-label"]} ${style["required"]}`}>
                        Description:
                    </label>
                    <div className={style["value-box"]}>
                        <textarea
                            name="description"
                            id="description"
                            cols={30}
                            rows={3}
                            defaultValue={""}
                            onChange={onChangeFunctionHandler}
                            textarea={value.description}
                        />
                        {!validatorValue.description
                            ? <div className={style["error-box"]}>It must be at least 20 characters</div>
                            : ""
                        }
                    </div>
                </div>
                <div className={`${style["create-form-box"]} ${style["submit"]}`}>
                    {isValid
                        ?
                        <input
                            type="submit"
                            defaultValue="Registration"
                            className={style["submit-button"]}
                            style={{ background: '#ffffff47', fontWeight: 'bold' }}
                        />
                        :
                        <input
                            type="submit"
                            defaultValue="Registration"
                            className={style["submit-button"]}
                            style={{ fontWeight: 'bold' }}
                        />}
                </div>
            </form>
        </section>
    )
};

export default Create;






