import style from './Details.module.css';

import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';

import { AuthContext } from '../../context/AurhContext';
import { ErrorContext } from '../../context/ErrorContext';

import { getCurrent } from '../../service/tripService';
import { likeTrip, dislikeTrip } from '../../service/tripService';

import Spinner from '../Spinner/Spinner';
import SpinnerText from '../Spinner/SpinnerText';
import Comment from '../Comment/Comment';

function Details() {
    const { tripId } = useParams();
    const [trip, setTrip] = useState({});
    const [owner, setOwner] = useState(false);
    const [guest, setGuest] = useState(true);
    const [liked, setLiked] = useState(false);

    const Navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { setError } = useContext(ErrorContext);
    useEffect(() => {
        getCurrent(tripId)
            .then(result => {
                const tripData = result;
                const isItLiked = tripData.likes.some(userId => userId == user._id);
                setTrip(tripData);

                if (user._id === tripData._ownerId) {
                    setOwner(true);
                };

                if (user._id) {
                    setGuest(false);
                };

                if (isItLiked) {
                    setLiked(true);
                };
            })
            .catch(err => {
                setError(err);
                Navigate('/404-page-not-found');
            });
    }, [liked]);

    function deleteHandler() {
        const isConfirm = window.confirm('Are yu sure you want to delete this post?');
        if (isConfirm) {
            Navigate(`/delete/${tripId}`);
        };
    };

    function OnClickLikeDislikeHandle() {
        if (!liked) {
            likeTrip(tripId, user)
                .then(result => {
                    setLiked(true);
                }).catch(err => {
                    setError(err);
                    Navigate('/404-page-not-found');
                });
        } else {
            dislikeTrip(tripId, user)
                .then(result => {
                    setLiked(false);
                }).catch(err => {
                    setError(err);
                    Navigate('/404-page-not-found');
                });
        };
    };

    const ownerElement = (
        <>
            <Link to={`/edit/${tripId}`}>
                <button id="edit" className={style["edit"]}>
                    Edit - <i className="fa-solid fa-pen" />
                </button>
            </Link>
            <button className={style["delete"]} onClick={deleteHandler}>
                Delete - <i className="fa-solid fa-trash" />
            </button >
        </>
    );

    const guestElement = (
        <>
            <button className={style["like"]} onClick={OnClickLikeDislikeHandle}>
                Like -
                {
                    liked
                        ? <i className="fa-solid fa-thumbs-up" style={{ color: 'green', width: '50px' }} />
                        : <i className="fa-solid fa-thumbs-up" style={{ width: '50px' }} />
                }
            </button>
        </>
    );

    return (
        <section className={style["details"]}>
            {Object.values(trip).length > 0
                ? <section className={style["details-container"]}>
                    <div className={style["details-image"]}>
                        <img src={trip.imageUrl} alt="vatcha dam" />
                    </div>
                    <article className={style["details-info"]}>
                        <h1 className={style["detailt-info-title"]}>
                            <span className={style["describe"]}>Destination:</span>
                            {trip.destination}
                        </h1>
                        <h3 className={style["country"]}>
                            <span className={style["describe"]}>Country:</span>
                            {trip.country}
                        </h3>
                        <p className={style["description"]}>{trip.description}</p>
                        <h3 className={style["author"]}>
                            <span className={style["describe"]}>Author:</span>
                            {trip.author}
                        </h3>
                        <div className={style["likes"]}>
                            Likes:
                            {trip.likes
                                ? <span id="likes">{trip.likes.length}</span>
                                : <span id="likes"> 0</span>
                            }
                        </div>
                        <div className={style["buttons"]}>
                            {
                                !guest
                                    ? owner
                                        ? ownerElement
                                        : guestElement
                                    : ""
                            }
                        </div>
                    </article>
                    <Comment tripId={tripId} owner={owner} />
                </section>
                :
                <>
                    <SpinnerText />
                    <Spinner />
                </>
            }
        </section >
    );
};

export default Details;