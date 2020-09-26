import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Hero = styled.div`
  display: flex;
  width: 100%;
  background-image: url("/images/female-tailor.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 300px;
`;

const Landing = () => (
  <Wrapper className="full">
    <Hero />
  </Wrapper>
);

export default Landing;
