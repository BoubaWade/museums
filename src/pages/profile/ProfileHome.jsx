import NavBarProfile from "../../components/navBarProfile/NavBarProfile.jsx";
import MainProfile from "../../components/mainProfile/MainProfile.jsx";
import UpdateCardModal from "../../components/updateCardModal/UpdateCardModal.jsx";
import { useSelector } from "react-redux";

export default function ProfileHome() {
  const { isDisplayUpdateCardModal } = useSelector(
    (state) => state.displaySettings
  );
  return (
    <div>
      <NavBarProfile />
      <MainProfile />
      {isDisplayUpdateCardModal && <UpdateCardModal />}
    </div>
  );
}
