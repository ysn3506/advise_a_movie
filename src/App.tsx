import React, { useEffect, useState } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, Navigate, useHref } from "react-router-dom";
import { USER_LOGIN_SUCCESS } from './app/storage/redux/constants';
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Cookies from "js-cookie";
import { getGenres, getLatestArtists, getPopularArtists } from './app/services/API';
import RegisterForm from './views/Forms/registerForm';
import LoginForm from './views/Forms/loginForm';
import Home from './views/Home';
import { useAppDispatch, useAppSelector } from './app/storage/store';
import Preferences from './views/Preferences';




function App(props: any) {
  const [genres, setGenres] = useState([]);
  const [popularArtists, setPopularArtists] = useState([]);
  const [latestArtists, setLatestArtists] = useState([])
  const dispatch = useAppDispatch();


  const goTo = useHref

  const { userInfo } = useAppSelector((state) => state.user);




  useEffect(() => {
    getGenres()
      .then(resp =>
        setGenres(resp.genres)
    )
      
    getPopularArtists()
      .then(resp => setPopularArtists(resp.results))


    getLatestArtists()
    .then(resp=>setLatestArtists(resp.results))    
      .then(() => {
        const user: string | undefined = Cookies.get("userInfo")
        if (user) {
          const userInfo = JSON.parse(user);
          dispatch({ type: USER_LOGIN_SUCCESS, payload: userInfo })
        }
      })
      .catch((error) => {
        goTo("/login");
        throw error
      })
  }, [])



  return (
    <div className="App">
      <SwitchTransition mode="out-in">
        <CSSTransition key={userInfo} classNames="fade" timeout={250}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  userInfo ? <Navigate to="/home" /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/register"
                element={userInfo ? <Navigate to="/home" /> : <RegisterForm />}
              />
              <Route
                path="/home"
                element={userInfo ? <Home /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={userInfo ? <Navigate to="/home" /> : <LoginForm />}
              />
              <Route
                path="/preferences"
                element={userInfo ? <Preferences genres={genres} popularArtists={popularArtists}/> : <Navigate to="/login" />}
              />

              {/* <Route path="*" element={<Error />} /> */}
            </Routes>
          </BrowserRouter>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
