import styled from "styled-components";

export default function RememberCheckbox({ onChange }) {
  return (
    <CheckboxStyled>
      <input type="checkbox" id="remember-me" onChange={onChange} />
      <label htmlFor="remember-me">Se souvenir de moi</label>
    </CheckboxStyled>
  );
}

const CheckboxStyled = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  input {
    width: 13px;
    height: 13px;
    border: 2px solid #b659b6;
  }
  label {
    color: white;
    font-size: 0.8rem;
    margin-left: 8px;
  }
`;
