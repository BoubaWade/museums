import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import ProfileHome from "./pages/profile/ProfileHome.jsx";
import EachMuseumPage from "./pages/profile/EachMuseumPage.jsx";
import Error from "./pages/Error.jsx";
import Settings from "./pages/profile/Settings.jsx";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="*" Component={Error} />
        <Route Component={PrivateRoutes}>
          <Route path="/profile/profile-home" Component={ProfileHome} />
          <Route path="/profile/museum-details" Component={EachMuseumPage} />
          <Route path="/profile/settings" Component={Settings} />
        </Route>
      </Routes>
    </Router>
  );
}
