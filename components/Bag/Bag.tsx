import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import { Wrapper, Heading, Empty, Total } from "./Bag.styled";

const Bag = (): ReactElement => {
  return (
    <Wrapper className="full">
      <div>
        <Heading>Bag</Heading>
        <p>Items are reserved for 60 minutes</p>
      </div>
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
          <Button disabled text="Checkout" />
        </Total>
      </div>
    </Wrapper>
  );
};

export default Bag;
