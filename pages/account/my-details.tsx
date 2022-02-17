import styled from "styled-components";
import MyDetails from "../../components/MyDetails/MyDetails";

const Wrapper = styled.div`
  display: grid;
  background-color: #ebebeb;
  padding-top: var(--spacing-large);
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

const DetailsPage = () => {
  return (
    <Wrapper>
      <MyDetails />
    </Wrapper>
  );
};

export default DetailsPage;
