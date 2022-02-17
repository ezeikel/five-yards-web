import TextInput from "../../../inputs/TextInput/TextInput";
import { Heading, InputWrapper } from "./StepThree.styled";

const StepThree = () => (
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

export default StepThree;
