import React from 'react';
import styled from 'styled-components';
import CreateItem from '../components/CreateItem';
import PleaseSignIn from '../components/PleaseSignIn';

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: var(--spacing-medium);
  h1 {
    margin: 0;
    font-size: 2.2rem;
  }
`;

const SellPage = () => (
  <Wrapper>
    <PleaseSignIn>
      <CreateItem />
    </PleaseSignIn>
  </Wrapper>
);

export default SellPage;
