import { inputFieldsSignUp } from "../../../../config/config";
import InputSignUp from "./InputSignUp";

export default function InputsList({ credentials, errorField, handleChange }) {
  return (
    <>
      {inputFieldsSignUp(credentials, handleChange, errorField).map(
        (field, index) => (
          <InputSignUp key={index} field={field} />
        )
      )}
    </>
  );
}
