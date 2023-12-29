import styled from "styled-components";

export default function BannerDatePicked({ basketItem }) {
  return (
    <BannerDatePickedStyled>
      <span> À visiter le : {basketItem.datePicked}</span>
    </BannerDatePickedStyled>
  );
}
const BannerDatePickedStyled = styled.div`
  background-color: #b659b6;
  color: #eeebeb;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  span {
    font-size: 12px;
    font-weight: 500;
  }
`;
