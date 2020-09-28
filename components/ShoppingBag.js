import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid #d1cfcf;
  > div {
    &:first-of-type {
      padding: var(--spacing-large);
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
`;

const ShoppingBag = () => {
  return (
    <Wrapper>
      <div>
        <h3>Shopping bag</h3>
        <p>Items are reserved for 60 minutes</p>
      </div>
      <div>
        <Empty>Empty</Empty>
        <div>
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
          <div>
            <span>Total fee</span>
            <span>£0.00</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ShoppingBag;
