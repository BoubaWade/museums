import styled from "styled-components";
import ControlledInput from "../../../reusable-ui/ControlledInput";
import { inputFieldsCardSection } from "../../../../config/config";

export default function InputsContainer({ data, setData }) {
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const inputFields = inputFieldsCardSection(data);

  return (
    <InputsContainerStyled>
      {inputFields.map(({ icon, placeholder, name, value }) => {
        return (
          <ControlledInput
            key={name}
            classNameContainer="input-container"
            icon={icon}
            type="text"
            className="input"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={(e) => handleChange(e)}
          />
        );
      })}
    </InputsContainerStyled>
  );
}

const InputsContainerStyled = styled.div`
  width: 85%;
  .input-container {
    position: relative;
    height: 35px;
    margin: 0 auto 10px;
    .input {
      width: 100%;
      height: 100%;
      padding: 0 40px;
      border: 2px solid #b659b6;
      border-radius: 5px;
      outline: none;
    }
    .icon {
      position: absolute;
      top: 50%;
      left: 10px;
      font-size: 20px;
      color: #b659b6;
      transform: translateY(-50%);
    }
  }
`;
