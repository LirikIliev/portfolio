import style from './Home.module.css';

import { useState, useEffect, useContext } from 'react';
import Spinner from '../Spinner/Spinner';
import SpinnerText from '../Spinner/SpinnerText';

import { getSortedByDate } from '../../service/tripService';

import { ErrorContext } from '../../context/ErrorContext';
import collage from '../../Resources/img/love-fishing.png';
import TripElement from './TripElement/TripElement';


function Main() {
    const { setError } = useContext(ErrorContext);

    const [sortedTrips, setSortedTrips] = useState([]);
    useEffect(() => {
        getSortedByDate()
            .then(result => {
                setSortedTrips(result);
                setInterval(() => {
                    if (result.length <= 0) {
                        setSortedTrips('');
                    }
                }, 6000);
            })
            .catch(err => {
                setError(err);
            });
    }, []);

    return (
        <section className={style["main-section-box"]}>
            <section className={style["company-info-container"]}>
                <article className={style["company-info-articles"]}>
                    <h3 className={style["second-title"]}>
                        Share your best fishing trips and destination with us!
                    </h3>
                    <h1 className={style["main-title"]}>Enjoy nature!</h1>
                </article>
                <img src={collage} className={style["company-image"]} alt="fish collage pictures" />
            </section>
            <section className={style["destination-container"]}>
                {Array.isArray(sortedTrips)
                    ?
                    sortedTrips.length > 0
                        ?
                        <h2 className={style["destination-container-title"]}>
                            The newest three destination
                        </h2>
                        :
                        <h2 className={style["destination-container-title"]}>
                            <SpinnerText />
                        </h2>
                    :
                    <h2 className={style["destination-container-title"]}>
                        There have been no shared trips yet!
                    </h2>
                }
                {
                    Array.isArray(sortedTrips)
                        ?
                        sortedTrips.length > 0 ?
                            sortedTrips.map(trip => {
                                return (
                                    <div className={style["destination-box"]} key={trip._id}>
                                        <TripElement trip={trip} />
                                    </div>
                                )
                            })
                            :
                            <Spinner />
                        : ""
                }
            </section>
        </section>
    )
}

export default Main;