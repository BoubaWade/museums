import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Profile() {
  const currentUser = useSelector((state) => state.sign.currentUser);

  // if (!currentUser) {
  //   return <Navigate to="/" />;
  // }
  return (
    <div>
      <Outlet />
    </div>
  );
}
