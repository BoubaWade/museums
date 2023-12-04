import React from "react";
import styled from "styled-components";
import DatePicker from "react-date-picker";
import { useState } from "react";

export default function BackBasketCard() {
  const [datePicked, setDatePicked] = useState(new Date());

  const handleSelectDate = (e) => {
    e.stopPropagation();
  };

  return (
    <BackBasketCardStyled>
      <DatePicker
        id="date-picker"
        onChange={setDatePicked}
        onClick={handleSelectDate}
        value={datePicked}
        calendarClassName="calendar"
      />
    </BackBasketCardStyled>
  );
}

const BackBasketCardStyled = styled.div`
  background-color: #f6e9f6;
  transform: rotateY(-180deg);
  .calendar {
    position: absolute;
    border-radius: 0 0 10px 10px;
    border: 2px solid #b659b6;
  }
`;
