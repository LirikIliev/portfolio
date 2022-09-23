import { Link } from 'react-router-dom';
import style from '../MyPosts.module.css';


function MyPostElement({ myTrip }) {

    return (
        <>
            <img
                src={myTrip.imageUrl}
                className={style["my-posts-image"]}
                alt="Image of the some dam"
            />
            <h2 className={style["my-posts-title"]}>
                <span className={style["my-post-label"]}>Country: </span>{myTrip.country}
            </h2>
            <h4 className={style["my-posts-title"]}>
                <span className={style["my-post-label"]}>Destination: </span>{myTrip.destination}
            </h4>
            <Link to={`/details/${myTrip._id}`}>
                <button className={style["my-posts-link"]}>Details</button>
            </Link>
        </>
    )
};


export default MyPostElement;