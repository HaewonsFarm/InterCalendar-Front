import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import ProfilePage from "./pages/ProfilePage";
import CreateGroupPage from "./pages/CreateGroupPage";
import SignUpPage from "./pages/SignUpPage";
import ItemPage from "./pages/ItemPage";
import WaitingPage from "./pages/WaitingPage";
import GroupPage from "./pages/GroupPage";

import { useSelector } from "react-redux";

import "./App.scss";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const loggedIn = useSelector((state) => state.auth.isAuthenticated);

  // useEffect(() => {
  //   console.log(loggedIn);
  // }, [loggedIn]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} exact />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/profile"
            element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/create-group"
            element={isAuthenticated ? <CreateGroupPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/crud-new-item/:id?"
            element={isAuthenticated ? <ItemPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/waiting-room/:roomId?"
            element={isAuthenticated ? <WaitingPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/group-page/:id?"
            element={isAuthenticated ? <GroupPage /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
