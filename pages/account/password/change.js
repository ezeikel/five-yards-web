import styled from "styled-components";
import ChangePassword from "../../../components/ChangePassword";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: var(--spacing-large) 1fr var(--spacing-large);
  justify-items: center;
  padding-bottom: var(--spacing-large);
  background-color: #ebebeb;
  padding-top: var(--spacing-large);

  > * {
    grid-column: 2 / -2;
  }

  > .full {
    grid-column: 1 / -1;
  }
`;

const PasswordChangePage = () => {
  return (
    <Wrapper>
      <ChangePassword />
    </Wrapper>
  );
};

export default PasswordChangePage;
