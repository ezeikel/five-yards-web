import { ErrorStyles } from './ErrorMessage.styled';

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((networkError, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <ErrorStyles key={i}>
        <p data-test="graphql-error">
          <strong>Shoot!</strong>
          {networkError.message.replace('GraphQL error: ', '')}
        </p>
      </ErrorStyles>
    ));
  }
  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        <strong>Shoot!</strong>
        {error.message.replace('GraphQL error: ', '')}
      </p>
    </ErrorStyles>
  );
};

export default DisplayError;
