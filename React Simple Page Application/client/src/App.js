import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AurhContext";
import { ErrorContext } from "./context/ErrorContext";

import PrivetRouteUnLogged from "./Components/common/PrivetRouteUnLogged";
import PrivetRouteLogged from "./Components/common/PrivetRouteLogged";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import MyPosts from './Components/MyPosts/MyPosts';
import Create from './Components/Create/Create';
import Edit from './Components/Edit/Edit';
import Details from './Components/Details/Details';
import AllPosts from "./Components/AllPosts/AllPosts";
import Logout from "./Components/Logout/Logout";
import Delete from "./Components/Delete/Delete";
import PageNotFound from "./Components/404NotFound/PageNotFound";
import AboutUs from "./Components/AboutUs/AboutUs";

import { useError } from "./hooks/useError";

function App() {
  const [error, setError] = useError();

  return (
    <>
      <ErrorContext.Provider value={{ error, setError }}>
        <AuthProvider>
          <Header />
          <main className="main-section">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/all-posts" element={<AllPosts />} />
              <Route path="/my-posts" element={<MyPosts />} />
              <Route path="/login" element={
                <PrivetRouteLogged>
                  <Login />
                </PrivetRouteLogged>
              } />
              <Route path="/logout" element={
                (
                  <PrivetRouteUnLogged>
                    <Logout />
                  </PrivetRouteUnLogged>
                )
              } />
              <Route path="/register" element={
                <PrivetRouteLogged>
                  <Register />
                </PrivetRouteLogged>
              } />
              <Route path="/create-trip" element={
                (
                  <PrivetRouteUnLogged>
                    <Create />
                  </PrivetRouteUnLogged>
                )
              } />
              <Route path="/edit/:tripId" element={
                (
                  <PrivetRouteUnLogged>
                    <Edit />
                  </PrivetRouteUnLogged>
                )
              } />
              <Route path="/details/:tripId" element={<Details />} />
              <Route path="/delete/:tripId" element={
                (
                  <PrivetRouteUnLogged>
                    <Delete />
                  </PrivetRouteUnLogged>
                )
              } />
              <Route path="/404-page-not-found" element={<PageNotFound />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          </main>
          <Footer />
        </AuthProvider>
      </ErrorContext.Provider>
    </>
  );
}

export default App;
