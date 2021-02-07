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

const ServicesAndExpertise = () => (
  <>
    <Heading>Lorem ipsum dolor sit</Heading>
    <InputWrapper className="input-wrapper">
      <h3>How many years experience do you have?</h3>
      <TextInput
        type="text"
        name="yearsExperience"
        placeholder="Enter the number of years"
      />
    </InputWrapper>
    <InputWrapper className="input-wrapper">
      <h3>What is your price range?</h3>
      <SelectInput name="priceRange" placeholder="Select price range">
        {PROFESSION_OPTIONS.map(option => (
          <option key={option} value={option.replace(/\s/g, "")}>
            {option.charAt(0) + option.slice(1).toLowerCase()}
          </option>
        ))}
      </SelectInput>
    </InputWrapper>
    <InputWrapper className="input-wrapper">
      <h3>What services do you offer?</h3>
      <p>
        These skillsets will help customers narrow down if you’re the
        tailor/designer for them.
      </p>
      <CheckboxInput name="services.alteration">Alteration</CheckboxInput>
      <CheckboxInput name="services.designService">
        Design service
      </CheckboxInput>
      <CheckboxInput name="services.bespokeOutfit">
        Bespoke outfit
      </CheckboxInput>
      <CheckboxInput name="services.groupBooking">Group booking</CheckboxInput>
      <CheckboxInput name="services.remoteTailoring">
        Remote bookings
      </CheckboxInput>
      <CheckboxInput name="services.inPersonTailoring">
        In person tailoring
      </CheckboxInput>
      <CheckboxInput name="services.other">Other</CheckboxInput>
    </InputWrapper>
    <InputWrapper className="input-wrapper">
      <h3>What services do you offer?</h3>
      <p>
        These skillsets will help customers narrow down if you’re the
        tailor/designer for them.
      </p>
      <CheckboxInput name="services.agbaya">Abaya</CheckboxInput>
      <CheckboxInput name="services.agbada">Agbada</CheckboxInput>
      <CheckboxInput name="services.batakariFugu">Batakari/Fugu</CheckboxInput>
      <CheckboxInput name="expertise.babbanRiga">Babban Riga</CheckboxInput>
      <CheckboxInput name="expertise.boubou">Boubou</CheckboxInput>
      <CheckboxInput name="expertise.gele">Gele</CheckboxInput>
      <CheckboxInput name="expertise.iro">Iro</CheckboxInput>
      <CheckboxInput name="expertise.isiagu">Isiagu</CheckboxInput>
      <CheckboxInput name="expertise.kabba">Kabba</CheckboxInput>
      <CheckboxInput name="expertise.tailorSuit">Tailored suit</CheckboxInput>
      <CheckboxInput name="expertise.dress">Dress</CheckboxInput>
      <CheckboxInput name="expertise.weddingDress">Wedding dress</CheckboxInput>
      <CheckboxInput name="expertise.bridesmaidDress">
        Bridesmaid dress
      </CheckboxInput>
      <CheckboxInput name="expertise.groomsmenSuit">
        Groomsmen suit
      </CheckboxInput>
      <CheckboxInput name="expertise.tuxedo">Tuxedo</CheckboxInput>
      <CheckboxInput name="expertise.RecutReconstruction">
        Re-cut/Reconstruction
      </CheckboxInput>
    </InputWrapper>
    <InputWrapper className="input-wrapper">
      <h3>What events do you cater for?</h3>
      <CheckboxInput name="events.wedding">Wedding</CheckboxInput>
      <CheckboxInput name="events.christening">Christening</CheckboxInput>
      <CheckboxInput name="events.engagementParty">
        Engagement party
      </CheckboxInput>
      <CheckboxInput name="events.funeral">Funeral</CheckboxInput>
      <CheckboxInput name="events.formalEvent">Formal event</CheckboxInput>
      <CheckboxInput name="events.casualWear">Casual wear</CheckboxInput>
    </InputWrapper>
  </>
);

export default ServicesAndExpertise;
