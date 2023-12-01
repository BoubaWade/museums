import React, { useEffect } from "react";
import NavEachMuseumPage from "../../components/navEachMuseumPage/NavEachMuseumPage";
import MainEachMuseumPage from "../../components/mainEachMuseumPage/MainEachMuseumPage";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function EachMuseumPage() {
  const datasMuseum = useSelector(
    (state) => state.museums.dataRecoveredAfterClickingOnACard
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!datasMuseum) {
      navigate("/profile/profile-home");
    }
  }, []);

  return (
    <div>
      <NavEachMuseumPage />
      <MainEachMuseumPage />
    </div>
  );
}
