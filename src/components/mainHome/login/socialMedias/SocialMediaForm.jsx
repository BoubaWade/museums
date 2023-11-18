import styled from "styled-components";
import WithGoogle from "./WithGoogle";
import WithFacebook from "./WithFacebook";

export default function SocialMediaForm() {
  return (
    <SocialMediaFormStyled>
      <WithFacebook />
      <WithGoogle />
    </SocialMediaFormStyled>
  );
}

const SocialMediaFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
`;
