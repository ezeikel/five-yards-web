// import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: var(--spacing-large);
  height: var(--spacing-large);
  border-radius: 50%;
  overflow: hidden;
  margin-right: var(--spacing-small);
  img {
    max-width: 100%;
    max-height: 100%;
    object-position: center;
    object-fit: cover;
  }
`;

const UserAvatar = ({ image }) => (
  <Wrapper>
    <img src={image} width="300" height="300" />
  </Wrapper>
);

export default UserAvatar;
