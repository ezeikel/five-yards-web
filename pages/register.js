import styled from "styled-components";
import Register from "../components/Register";

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

const RegisterPage = () => {
  return (
    <Wrapper>
      <Register />
    </Wrapper>
  );
};

export default RegisterPage;
