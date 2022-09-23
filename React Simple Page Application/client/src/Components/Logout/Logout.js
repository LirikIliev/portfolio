import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";

import { AuthContext } from "../../context/AurhContext";
import { logoutUser } from "../../service/userService";

function Logout() {
    const Navigate = useNavigate();
    const { user, userLogout, sessionName } = useContext(AuthContext);
    useEffect(() => {
        logoutUser(user.accessToken)
            .then(result => {
                userLogout();
                Navigate('/');
                localStorage.removeItem(sessionName);
            })
            .catch(err => {
                Navigate('/');
            })
    });

    return null;
};

export default Logout