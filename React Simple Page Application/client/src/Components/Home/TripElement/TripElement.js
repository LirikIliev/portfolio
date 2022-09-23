import style from '../Home.module.css';

import { Link } from 'react-router-dom';

function TripElement({ trip }) {
    return (
        <>
            <img src={trip.imageUrl} className={style["destination-image"]} alt="Image of the some dam" />
            <h2 className={style["destination-title"]}>
                <span className={style["post-label"]}>Country:</span> {trip.country}</h2>
            <h4 className={style["destination-title"]}>
                <span className={style["post-label"]}>Destination:</span>{trip.destination}</h4>
            <Link to={`/details/${trip._id} `}>
                <button className={style["destination-link"]}>Details</button>
            </Link>
        </>
    );
};

export default TripElement;