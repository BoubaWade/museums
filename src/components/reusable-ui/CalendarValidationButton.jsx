import PrimaryButton from "./PrimaryButton";
import styled from "styled-components";

export default function CalendarValidationButton({
  isReserved,
  className,
  onClick,
}) {
  return (
    <CalendarValidationButtonStyled className={className}>
      {!isReserved ? (
        <PrimaryButton
          id="validate-date"
          label="Valider"
          className="button-validate-date-Picker"
          onClick={onClick}
        />
      ) : (
        <p className="confirm-reservation">Réservation validé</p>
      )}
    </CalendarValidationButtonStyled>
  );
}
const CalendarValidationButtonStyled = styled.div`
  #validate-date {
    display: flex;
    justify-content: right;
    align-items: center;
    margin-top: 10px;
  }
  .button-validate-date-Picker {
    width: 100%;
    height: 45px;
    font-size: 16px;
  }
  .confirm-reservation {
    font-size: 20px;
    text-align: center;
    color: #008000bc;
    font-weight: 400;
    margin-top: 10px;
  }
`;
