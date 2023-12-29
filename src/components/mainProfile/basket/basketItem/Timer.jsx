import { useEffect, useState } from "react";
import styled from "styled-components";
const NUMBER_OF_MILLISECOND_IN_ONE_MINUTE = 60000;

export default function Timer() {
  const [minutesElapsed, setMinutesElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutesElapsed((prevMinutes) => prevMinutes + 1);
    }, NUMBER_OF_MILLISECOND_IN_ONE_MINUTE);

    return () => clearInterval(interval);
  }, []);

  return (
    <TimerStyled>
      Ajouté il y'a
      {minutesElapsed === 1 ? " 1 minute" : ` ${minutesElapsed} minutes`}
    </TimerStyled>
  );
}
const TimerStyled = styled.span`
  color: #b659b6;
  position: absolute;
  right: 10px;
  bottom: 2px;
  font-size: 11px;
`;
