import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, Navigate, useHref } from "react-router-dom";
import { USER_LOGIN_SUCCESS } from './app/storage/redux/constants';
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Cookies from "js-cookie";
import { getGenres } from './app/services/API';
import RegisterForm from './views/Forms/registerForm';
import LoginForm from './views/Forms/loginForm';
import { useAppDispatch, useAppSelector } from './app/storage/store';




function App(props:any) {
  //  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();


const goTo=useHref

  const selector = useAppSelector;

  const { userInfo } = selector((state) => state.user);
  



  useEffect(() => {
    getGenres()
      .then(resp => console.log(resp))
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
                  !userInfo ? <Navigate to="/register" /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/register"
                element={<RegisterForm />}
              />
              <Route
                path="/login"
                element={<LoginForm />}
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
