import { useEffect, useState } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, Navigate, useHref } from "react-router-dom";
import { USER_LOGIN_SUCCESS } from './app/storage/redux/user/constants';
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { getGenres, getPopularArtists } from './app/services/API';
import RegisterForm from './views/Forms/registerForm';
import LoginForm from './views/Forms/loginForm';
import Home from './views/Home';
import { store,useAppDispatch, useAppSelector } from './app/storage/store';
import Preferences from './views/Preferences';
import { getCookie, getMovies } from './app/utilities';




function App(props: any) {
  const [genres, setGenres] = useState([]);
  const [popularArtists, setPopularArtists] = useState([]);
  const dispatch = useAppDispatch();


  const goTo = useHref

  const { userInfo } = useAppSelector((state) => state.user);
  const {_id,preferences}=userInfo
  



  useEffect(() => {
    const user: string | undefined = getCookie('userInfo')
    if (user) {
      const userData = JSON.parse(user);
      dispatch({ type: USER_LOGIN_SUCCESS, payload: userData })

    }  

    getGenres()
      .then(resp =>setGenres(resp.genres)
    ).then(() => getPopularArtists())
      .then(resp => setPopularArtists(resp.results))
      .then(() => {
        const { userInfo: { preferences: { popularity, artists, genres } } } = store.getState().user;
        getMovies(popularity,artists,genres)
      })
      .catch((error) => {
        console.log(error)
        console.log("burada")
        goTo("/login");
        throw error
      })
    
    
  }, [])



  return (
    <div className="App">
      <div className='app-wrapper'>
      <SwitchTransition mode="out-in">
        <CSSTransition key={window.location.pathname} classNames="fade" timeout={250}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  _id ? <Navigate to="/home" /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/register"
                  element={_id ? <Navigate to="/home" /> : <RegisterForm />}
              />
              <Route
                path="/home"
                  element={_id ? <Home movies={preferences} /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                  element={_id ? <Navigate to="/home" /> : <LoginForm />}
              />
              <Route
                path="/preferences"
                  element={_id ? <Preferences movieTypes={genres} popularArtists={popularArtists}/> : <Navigate to="/login" />}
              />

              {/* <Route path="*" element={<Error />} /> */}
            </Routes>
          </BrowserRouter>
        </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
}

export default App;
