import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: var(--spacing-large) 1fr var(--spacing-large);
  justify-items: center;
  padding-bottom: var(--spacing-large);

  > * {
    grid-column: 2 / -2;
  }

  > .full {
    grid-column: 1 / -1;
  }
`;

const PrivacyPage = () => {
  return (
    <Wrapper>
      <h1>Privacy Page.</h1>
    </Wrapper>
  );
};

export default PrivacyPage;
