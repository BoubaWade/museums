import styled, { keyframes } from "styled-components";

export default function Loader({ className, style }) {
  return <LoaderStyled className={className} style={style}></LoaderStyled>;
}

const animLoader = keyframes`
 0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const LoaderStyled = styled.div`
  width: 120px;
  height: 120px;
  border: 10px solid rgba(0, 0, 0, 0.1);
  border-top: 10px solid #b659b6;
  border-radius: 50%;
  margin-top: 200px;
  animation: ${animLoader} 1s linear infinite;
`;
