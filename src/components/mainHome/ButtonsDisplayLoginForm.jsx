import { useDispatch, useSelector } from "react-redux";
import { toggleLoginForm } from "../../features/sign/signSlice";
import ButtonDisplayForm from "../reusable-ui/ButtonDisplayForm";

export default function ButtonsDisplayLoginForm() {
  const { isToggleLoginForm } = useSelector((state) => state.sign);
  const dispatch = useDispatch();

  return (
    <>
      {isToggleLoginForm ? (
        <ButtonDisplayForm
          label="Se connecter avec Facebook ou Google"
          onClick={() => dispatch(toggleLoginForm())}
        />
      ) : (
        <ButtonDisplayForm
          label="Se connecter avec E-mail"
          onClick={() => dispatch(toggleLoginForm())}
        />
      )}
    </>
  );
}
