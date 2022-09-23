import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import style from './AllPosts.module.css';

import { getAll } from '../../service/tripService';
import Spinner from '../Spinner/Spinner';
import SpinnerText from '../Spinner/SpinnerText';


function AllPosts() {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        getAll()
            .then(result => {
                setTrips(result);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <section className={style["all-posts-container"]}>
            <header className={style["title"]}>
                {trips.length >= 1
                    ? <h2 className={style["all-posts-container-title"]}>All Fishing Trips</h2>
                    : <SpinnerText />
                }
            </header>
            <section className={style["posts"]}>
                {trips.length > 0
                    ? trips.map(x =>
                    (<div className={style["all-posts-box"]} key={x._id}>
                        <img
                            src={x.imageUrl}
                            className={style["all-posts-image"]}
                            alt="Image of the some dam"
                        />
                        <h2 className={style["all-posts-title"]}>
                            <span className="my-post-label">Country: </span>{x.country}
                        </h2>
                        <h4 className={style["all-posts-title"]}>
                            <span className={style["my-post-label"]}>Destination: </span>{x.destination}
                        </h4>
                        <Link to={`/details/${x._id}`}>
                            <button className={style["all-posts-link"]}>Details</button>
                        </Link>
                    </div>))
                    : <Spinner />
                }
            </section>
        </section>
    );
};

export default AllPosts;