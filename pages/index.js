import styled from "styled-components";
import SearchForm from "../components/SearchForm";

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
  padding: var(--spacing-huge) var(--spacing-large);
`;

const Landing = () => (
  <Wrapper className="full">
    <Hero>
      <SearchForm />
    </Hero>
  </Wrapper>
);

export default Landing;
