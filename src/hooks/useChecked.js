import { useEffect, useState } from "react";
import { getEmailLocalStorage, getPasswordLocalStorage } from "../utils/user";

export default function useChecked(emailRef, passwordRef) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
    const emailStorage = getEmailLocalStorage();
    const passwordStorage = getPasswordLocalStorage();

    if (emailStorage && passwordStorage) {
      emailRef.current.value = emailStorage;
      passwordRef.current.value = passwordStorage;
      setIsChecked(true);
    }
  }, []);

  return { isChecked, setIsChecked };
}
