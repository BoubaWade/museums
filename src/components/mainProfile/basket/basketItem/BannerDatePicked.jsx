import styled from "styled-components";

export default function BannerDatePicked({ basketItem }) {
  const { datePicked, hourPicked } = basketItem;
  return (
    <BannerDatePickedStyled>
      <span>
        {datePicked} à {hourPicked}
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
  @media screen and (max-width: 900px) {
    span {
      font-size: 10px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    border-radius: 0;
    span {
      margin-bottom: 15px;
    }
  }
`;
