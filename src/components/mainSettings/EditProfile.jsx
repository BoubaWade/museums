import styled from "styled-components";
import ControlledInput from "../reusable-ui/ControlledInput";
import PrimaryButton from "../reusable-ui/PrimaryButton";
import { useState } from "react";
import {
  setDataSettings,
  setSelectedFile,
} from "../../features/profile/museumsSlice";
import { useDispatch } from "react-redux";
import {
  initialInputSettingsValue,
  inputFieldsSettings,
} from "../../config/config";

export default function EditProfile() {
  const [inputValue, setInputValue] = useState(initialInputSettingsValue);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  //   const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setDataSettings(inputValue));
  };

  return (
    <EditProfileStyled>
      <div>
        <h2>Modifier votre porfil</h2>
        <input type="file" onChange={(e) => handleFileChange(e)} />
      </div>
      <form onSubmit={handleSubmit}>
        {inputFieldsSettings(inputValue).map((field, index) => (
          <ControlledInput
            key={index}
            classNameContainer="input-container"
            className="input"
            placeholder={field.placeholder}
            name={field.name}
            value={field.value}
            onChange={(e) => handleChange(e)}
            autoFocus={field.autoFocus}
          />
        ))}
        <PrimaryButton label="Valider" className="submit-button" />
      </form>
    </EditProfileStyled>
  );
}
const EditProfileStyled = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  form {
    width: 100%;
    position: relative;
    margin-top: 50px;
    .input-container {
      width: 100%;
      margin-bottom: 10px;
      .input {
        width: 100%;
        font-size: 20px;
        text-align: left;
        padding: 15px 20px;
        border: 2px solid #b659b6;
        &::placeholder {
          text-align: left;
        }
      }
    }
    .submit-button {
      position: absolute;
      width: 110px;
      height: 40px;
      font-size: 16px;
      right: 0;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 60%;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
  }
  @media screen and (max-width: 650px) {
    width: 80%;
    h2 {
      font-size: 20px;
    }
    form {
      .input-container {
        .input {
          font-size: 18px;
          padding: 12px 20px;
        }
      }
      .submit-button {
        width: 100px;
        height: 35px;
        font-size: 14px;
      }
    }
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    h2 {
      font-size: 18px;
    }
    form {
      .input-container {
        .input {
          font-size: 16px;
          padding: 10px 18px;
        }
      }
      .submit-button {
        width: 90px;
        height: 30px;
      }
    }
  }
`;
