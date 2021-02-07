import styled from "styled-components";
import TextInput from "../TextInput";
import SelectInput from "../SelectInput";
import CheckboxInput from "../CheckboxInput";

const PROFESSION_OPTIONS = ["CHEAP", "EXPENSIVE"];

const Heading = styled.h1`
  font-family: var(--font-family-secondary);
  font-size: 3rem;
  line-height: 33px;
  font-weight: var(--font-weight-secondary-medium);
  margin: 0 0 var(--spacing-large);
`;

const InputWrapper = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: var(--font-weight-primary-semi-bold);
    line-height: 25px;
    margin: 0 0 var(--spacing-medium);
  }

  p {
    font-size: 1.6rem;
    line-height: 21px;
    margin: 0 0 var(--spacing-large);
  }

  span {
    font-size: 1.4rem;
  }

  textarea {
    margin: 0 0 var(--spacing-large);
  }

  > .select-input {
    & + .select-input {
      margin-top: var(--spacing-medium);
    }
  }

  .hour-selection {
    & + .hour-selection {
      margin-top: var(--spacing-large);
    }
  }

  .day {
    & + .day {
      margin-top: var(--spacing-large);
    }
  }
`;

const Location = () => (
  <>
    <Heading>Where are you located?</Heading>
    <p>
      Customers will only get your exact address once they’ve accepted a
      quotation of yours.
    </p>
    <InputWrapper className="input-wrapper">
      <h3>Door number</h3>
      <TextInput
        type="text"
        name="yearsExperience"
        placeholder="Enter the number of years"
      />
    </InputWrapper>
  </>
);

export default Location;
