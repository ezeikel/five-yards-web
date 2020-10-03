import styled from "styled-components";
import SignIn from "../components/SignIn";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: var(--spacing-large) 1fr var(--spacing-large);
  justify-items: center;
  padding-top: var(--spacing-large);

  > * {
    grid-column: 2 / -2;
  }

  > .full {
    grid-column: 1 / -1;
  }
  width: 100%;
`;

const SignInPage = () => (
  <Wrapper>
    <SignIn />
  </Wrapper>
);

export default SignInPage;
