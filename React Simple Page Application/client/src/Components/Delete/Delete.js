import { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { deleteTrip } from "../../service/tripService";

import { ErrorContext } from "../../context/ErrorContext";

function Delete() {
    const { tripId } = useParams();
    const { setError } = useContext(ErrorContext);
    const Navigator = useNavigate();

    useEffect(() => {
        deleteTrip(tripId)
            .then(result => {
                Navigator('/my-posts');
            }).catch(err => {
                setError(err);
                Navigator('/404-page-not-found');
            })
    });

    return null;
};

export default Delete;