import styled from "styled-components";
import PartnerWithUs from "../components/PartnerWithUs";
import PopularPrints from "../components/PopularPrints";
import PopularTailors from "../components/PopularTailors";
import SearchForm from "../components/SearchForm";

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  display: grid;
  grid-template-columns: 36px 1fr 36px;
  justify-items: center;

  > * {
    grid-column: 2 / -2;
  }

  > .full {
    grid-column: 1 / -1;
  }
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
  margin-bottom: var(--spacing-large);
`;

const Landing = () => (
  <Wrapper>
    <Hero className="full">
      <SearchForm />
    </Hero>
    <PopularTailors />
    <PopularPrints />
    <PartnerWithUs />
  </Wrapper>
);

export default Landing;
