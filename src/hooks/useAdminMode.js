import { useState } from "react";
import { getEmailLocalStorage } from "../utils/user";
import { signIn } from "../Firebase/firebaseUtilities";
import { setIsFormAdminDisplayed } from "../features/profile/displaySettingsSlice";
import { useDispatch } from "react-redux";

export default function useAdminMode() {
  const email = getEmailLocalStorage();
  const [errorPasswordAdmin, setErrorPasswordAdmin] = useState(false);
  const dispatch = useDispatch();

  const handleSignInModeAdmin = (passwordAdmin) => {
    signIn(email, passwordAdmin)
      .then((userCredential) => {
        if (userCredential) {
          dispatch(setIsFormAdminDisplayed(false));
        }
      })
      .catch((error) => {
        if (error.code === "auth/invalid-login-credentials") {
          setErrorPasswordAdmin(true);
        }
      });
  };

  return { errorPasswordAdmin, handleSignInModeAdmin };
}
