import { AuthContext } from "../../context/AurhContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

function PrivetRouteUnLogged({ children }) {
    const { isAuthenticated } = useContext(AuthContext);
    if (!isAuthenticated) {
        return <Navigate to={'/login'} replace />
    };
    return (
        <>
            {children}
        </>
    );
};

export default PrivetRouteUnLogged;