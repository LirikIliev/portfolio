import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const sessionName = "user";
    const [auth, setAuth, isAuthenticated] = useLocalStorage(sessionName, {});

    const userLogout = () => {
        setAuth({});
    };

    const userLogin = (userData) => {
        setAuth(userData);
    };

    return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout, sessionName, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};