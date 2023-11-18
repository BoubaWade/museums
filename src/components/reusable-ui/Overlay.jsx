import styled from "styled-components";

export default function Overlay({ className, onClick }) {
  return (
    <OverlayStyled className={className} onClick={onClick}></OverlayStyled>
  );
}
const OverlayStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 60%;
  position: absolute;
  top: 0;
  left: 0;
`;
