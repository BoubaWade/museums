import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import ProfileHome from "./pages/profile/ProfileHome.jsx";
import EachMuseumPage from "./pages/profile/EachMuseumPage.jsx";
import Error from "./pages/Error.jsx";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthState } from "./features/sign/signSlice.js";

export default function App() {
  const loadingData = useSelector((state) => state.sign.loadingData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthState());
  }, []);

  return (
    !loadingData && (
      <div>
        <Router>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/profile" Component={Profile}>
              <Route path="/profile/profile-home" Component={ProfileHome} />
              <Route
                path="/profile/museum-details"
                Component={EachMuseumPage}
              />
            </Route>
            <Route path="*" Component={Error} />
          </Routes>
        </Router>
      </div>
    )
  );
}
