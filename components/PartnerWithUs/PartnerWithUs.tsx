import Link from "next/link";
import Button from "../Button/Button";
import { Wrapper } from "./PartnerWithUs.styled";

const PartnerWithUs = () => {
  return (
    <Wrapper>
      <h3>Partner with us</h3>
      <div>
        <div>
          <span>Sign up</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link href="/register/business">
            <a>
              <Button text="Fabric seller" />
            </a>
          </Link>
          <Link href="/register/business">
            <a>
              <Button text="Tailor" />
            </a>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default PartnerWithUs;
