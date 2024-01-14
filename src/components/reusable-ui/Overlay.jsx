import styled from "styled-components";

export default function Overlay({ dataTestid, className, onClick }) {
  return (
    <OverlayStyled
      data-testid={dataTestid}
      className={className}
      onClick={onClick}
    ></OverlayStyled>
  );
}
const OverlayStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  max-width: 1500px;
  max-height: 900px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
  opacity: 60%;
`;
