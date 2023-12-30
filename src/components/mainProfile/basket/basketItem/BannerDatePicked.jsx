import styled from "styled-components";

export default function BannerDatePicked({ basketItem }) {
  const { datePicked, hourPicked } = basketItem;
  return (
    <BannerDatePickedStyled>
      <span>
        À visiter le : {datePicked} à {hourPicked}
      </span>
    </BannerDatePickedStyled>
  );
}
const BannerDatePickedStyled = styled.div`
  background-color: #b659b6;
  color: #eeebeb;
  width: calc(100% + 5px);
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  left: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  span {
    font-size: 12px;
    font-weight: 500;
  }
`;
