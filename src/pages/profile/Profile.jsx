import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Profile() {
  const currentUser = useSelector((state) => state.sign.currentUser);

  // if (!currentUser) {
  //   return <Navigate to="/" />;
  // }
  return (
    <ProfileStyled>
      <Outlet />
    </ProfileStyled>
  );
}
const ProfileStyled = styled.div`
  max-width: 1500px;
  max-height: 900px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow-y: auto;
  overflow-x: hidden;
`;
