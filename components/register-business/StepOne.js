import styled from "styled-components";
import TextInput from "../TextInput";
import SelectInput from "../SelectInput";
import TextareaInput from "../TextareaInput";
import ToggleInput from "../ToggleInput";
import { useFormikContext } from "formik";

const PROFESSION_OPTIONS = ["TAILOR", "FABRIC SELLER"];
const DAYS_OF_THE_WEEK = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

/**
 * https://stackoverflow.com/questions/17460235/mongodb-opening-hours-schema-and-query-for-open-closed
 *
 * As a string or a timestamp? You would probably convert it to a string first anyway, in JavaScript: var military_time = Math.floor(time/60) + ':' + time%60 then use a date/time library like moment.js to convert it to a time `var mTime = moment(military_time, "hh:m")
 *
 */

const HOURS = [
  {
    value: 0,
    display: "00:00",
  },
  {
    value: 30,
    display: "00:30",
  },
  {
    value: 60,
    display: "01:00",
  },
  {
    value: 90,
    display: "01:30",
  },
  {
    value: 120,
    display: "02:00",
  },
  {
    value: 150,
    display: "02:30",
  },
  {
    value: 180,
    display: "03:00",
  },
  {
    value: 210,
    display: "03:30",
  },
  {
    value: 240,
    display: "04:00",
  },
  {
    value: 270,
    display: "04:30",
  },
  {
    value: 300,
    display: "05:00",
  },
  {
    value: 330,
    display: "05:30",
  },
  {
    value: 360,
    display: "06:00",
  },
  {
    value: 390,
    display: "06:30",
  },
  {
    value: 420,
    display: "07:00",
  },
  {
    value: 450,
    display: "07:30",
  },
  {
    value: 480,
    display: "08:00",
  },
  {
    value: 510,
    display: "08:30",
  },
  {
    value: 540,
    display: "09:00",
  },
];

const TWENTY_FOUR_HOUR = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
];
const MINUTE = [...Array(60).keys()];
const AMPM = ["AM", "PM"];

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

const Day = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    &:first-of-type {
      display: flex;
      justify-content: space-between;
      margin-bottom: var(--spacing-medium);
      > span {
        &:first-of-type {
          font-size: 1.6rem;
        }
      }
    }
  }
`;

const HourSelection = styled.div`
  display: flex;
  > div {
    flex: 1 1 50%;
    + div {
      margin-left: var(--spacing-small);
    }
  }
`;

const Closed = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  color: #db0707;
  font-weight: var(--font-weight-primary-medium);
`;

const StepOne = () => {
  const { values } = useFormikContext();

  // TODO: use a selectInput using formik to match hour option to formik values

  return (
    <>
      <InputWrapper className="input-wrapper">
        <h3>What is your profession?</h3>
        <SelectInput name="profession" placeholder="Select your profession">
          {PROFESSION_OPTIONS.map(option => (
            <option key={option} value={option.replace(/\s/g, "")}>
              {option.charAt(0) + option.slice(1).toLowerCase()}
            </option>
          ))}
        </SelectInput>
      </InputWrapper>
      <InputWrapper className="input-wrapper">
        <h3>What is your company&apos;s name?</h3>
        <TextInput
          type="text"
          name="companyName"
          placeholder="Enter your company's name"
        />
      </InputWrapper>
      <InputWrapper className="input-wrapper">
        <h3>Company bio?</h3>
        <p>
          Write a short summary to sell yourself to your customers. Let them
          know about you, your company, experience etc...
        </p>
        <TextareaInput name="companyBio" placeholder="Sell yourself!" />
        <span>500 character limit.</span>
      </InputWrapper>
      <InputWrapper className="input-wrapper">
        <h3>What are your opening hours?</h3>
        {DAYS_OF_THE_WEEK.map(day => (
          <Day className="day" key={day}>
            <div>
              <span>{day.charAt(0) + day.slice(1).toLowerCase()}</span>
              <ToggleInput
                name={`hours.${day.toLocaleLowerCase()}.open`}
                type="checkbox"
              />
            </div>
            {values.hours[day.toLowerCase()].open ? (
              <HourSelection className="hour-selection">
                <SelectInput name={day.toLowerCase() + "-start"}>
                  {HOURS.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.display}
                    </option>
                  ))}
                </SelectInput>
                <SelectInput name={day.toLowerCase() + "-end"}>
                  {HOURS.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.display}
                    </option>
                  ))}
                </SelectInput>
              </HourSelection>
            ) : (
              <Closed>Closed</Closed>
            )}
          </Day>
        ))}
      </InputWrapper>
      <InputWrapper className="input-wrapper">
        <h3>What time do you usually take your lunch break?</h3>
        <p>This will be used to populate your calendar.</p>
        <SelectInput name="lunchBreakStart" placeholder="Select time">
          {HOURS.map(option => (
            <option key={option.value} value={option.value}>
              {option.display}
            </option>
          ))}
        </SelectInput>
        <SelectInput
          name="lunchBreakLength"
          placeholder="Select your your lunch break length"
        >
          {HOURS.map(option => (
            <option key={option.value} value={option.value}>
              {option.display}
            </option>
          ))}
        </SelectInput>
      </InputWrapper>
    </>
  );
};

export default StepOne;
