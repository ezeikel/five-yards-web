import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-row-gap: var(--spacing-medium);
  padding: var(--padding-page-wrap);
`;

const Home = props => (
  <Wrapper>
    <p>Hello World</p>
  </Wrapper>
);

export default Home;