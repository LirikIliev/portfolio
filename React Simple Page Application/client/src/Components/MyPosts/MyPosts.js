import style from './MyPosts.module.css';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getAllUserTrips } from '../../service/tripService';
import MyPostElement from './MyPostsElement/myPostsElement';
import Spinner from '../Spinner/Spinner';
import SpinnerText from '../Spinner/SpinnerText';
function MyPosts() {
    const [myTrips, setMyTrips] = useState([]);
    const Navigation = useNavigate()

    useEffect(() => {
        getAllUserTrips()
            .then(result => {
                setMyTrips(result);
                setInterval(() => {
                    if (result.length <= 0) {
                        setMyTrips('');
                    };
                }, 6000);
            }).catch(err => {
                console.log(err);
                Navigation('/404-page-not-found');
            });
    }, [])

    return (
        <section className={style["my-posts-container"]}>
            <header className={style["title"]}>
                {Array.isArray(myTrips) ?
                    myTrips.length >= 1
                        ? <h2 className={style["my-posts-container-title"]}>My Fishing Trips</h2>
                        : <h2 className={style["my-posts-container-title"]}><SpinnerText /></h2>
                    : <h2 className={style["my-posts-container-title"]}>You haven't been shared trip yet!</h2>
                }
            </header>
            <section className={style["posts"]}>
                {Array.isArray(myTrips) ?
                    myTrips.length >= 1
                        ? myTrips.map(myTrip => {
                            return (
                                <div className={style["my-posts-box"]} key={myTrip._id}>
                                    <MyPostElement myTrip={myTrip} />
                                </div>
                            );
                        })
                        : <Spinner />
                    : ""
                }
            </section>
        </section >

    )
}

export default MyPosts