import { AuthContext } from "../../context/AurhContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

function PrivetRouteLogged({ children }) {
    const { isAuthenticated } = useContext(AuthContext);
    if (isAuthenticated) {
        return <Navigate to={'/'} replace />
    };
    return (
        <>
            {children}
        </>
    );
};

export default PrivetRouteLogged;