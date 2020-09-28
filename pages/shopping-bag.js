import styled from "styled-components";
import ShoppingBag from "../components/ShoppingBag";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Index = () => (
  <Wrapper>
    <ShoppingBag />
  </Wrapper>
);

export default Index;
