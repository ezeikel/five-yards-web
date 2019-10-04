import styled from 'styled-components';
import queryString from 'query-string';
import Reset from '../components/Reset';

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: var(--spacing-medium);
  h1 {
    margin: 0;
    font-size: 22px;
  }
`;

const ResetPage = props => (
  <Wrapper>
    <p>Reset Your Password {queryString.parse(props.location.search).resetToken}</p>
    <Reset resetToken={queryString.parse(props.location.search).resetToken}/>
  </Wrapper>
);

export default ResetPage;
