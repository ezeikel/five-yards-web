import styled from "styled-components";
import ShoppingBag from "../components/ShoppingBag";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShoppingBagPage = () => (
  <Wrapper>
    <ShoppingBag />
  </Wrapper>
);

export default ShoppingBagPage;
