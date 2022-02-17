// import Image from "next/image";
import { Wrapper } from "./UserAvatar.styled";

const UserAvatar = ({ image }) => (
  <Wrapper>
    <img src={image} alt="user avatar" width="300" height="300" />
  </Wrapper>
);

export default UserAvatar;
