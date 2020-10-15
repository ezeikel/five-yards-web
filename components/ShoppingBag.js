import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > div {
    &:first-of-type {
      padding: 0 var(--spacing-large) var(--spacing-large);
      h3 {
        font-size: 25px;
        margin: 0 0 var(--spacing-tiny);
      }
      p {
        font-size: 14px;
        margin: 0;
      }
    }
    &:nth-of-type(2) {
      background-color: #f2f2f2;
      padding: var(--spacing-large);

      > div {
        background-color: var(--color-white);
        padding: var(--spacing-medium);
        border-radius: 4px;

        + div {
          margin-top: var(--spacing-medium);
        }
      }
    }
  }
`;

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    margin-bottom: var(--spacing-medium);
  }
  span {
    display: flex;
    justify-content: center;
    &:first-of-type {
      margin-bottom: var(--spacing-small);
      font-size: 20px;
      font-weight: 700;
    }
    &:last-of-type {
      font-size: 16px;
      font-weight: 300;
    }
  }
`;

const Total = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:first-of-type {
      margin-bottom: var(--spacing-medium);
      span {
        &:first-of-type {
          font-size: 25px;
          font-weight: 700;
        }
        &:nth-of-type(2) {
          font-size: 14px;
          font-weight: 700;
        }
      }
    }
    &:nth-of-type(2) {
      font-size: 16px;
      font-weight: 300;
      margin-bottom: var(--spacing-medium);
    }
    &:nth-of-type(3) {
      font-size: 16px;
      font-weight: 300;
      margin-bottom: var(--spacing-medium);
    }
    &:nth-of-type(4) {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: var(--spacing-large);
    }
  }
  hr {
    background-color: #bebebe;
    height: 1px;
    width: 100%;
    border: 0;
    margin: 0 0 var(--spacing-medium);
  }

  button {
    font-family: var(--font-family-primary);
    font-size: 20px;
    border-radius: 5px;
    width: 100%;
    padding: var(--spacing-small);
    &[disabled] {
      background-color: #bebebe;
      color: #5f5f5f;
      border: 1px solid #bebebe;
      outline: 0;
    }
  }
`;

const ShoppingBag = () => {
  return (
    <Wrapper>
      {/* <div>
        <p>Items are reserved for 60 minutes</p>
      </div> */}
      <div>
        <Empty>
          <FontAwesomeIcon
            icon={["fal", "dizzy"]}
            color="var(--color-black)"
            size="10x"
          />
          <span>It seems empty here</span>
          <span>Nothing to show right now</span>
        </Empty>
        <Total>
          <div>
            <span>Total</span>
            <span>0 items</span>
          </div>
          <div>
            <span>Subtotal</span>
            <span>£0.00</span>
          </div>
          <div>
            <span>Delivery fee</span>
            <span>£0.00</span>
          </div>
          <hr />
          <div>
            <span>Total</span>
            <span>£0.00</span>
          </div>
          <button disabled>Checkout</button>
        </Total>
      </div>
    </Wrapper>
  );
};

export default ShoppingBag;
