import styled from 'styled-components';
import Bag from '../components/Bag/Bag';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: var(--spacing-large) 1fr var(--spacing-large);
  justify-items: center;

  > * {
    grid-column: 2 / -2;
  }

  > .full {
    grid-column: 1 / -1;
  }
`;

const BagPage = () => {
  return (
    <Wrapper>
      <Bag />
    </Wrapper>
  );
};

export default BagPage;
