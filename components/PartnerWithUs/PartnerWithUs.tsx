import Link from 'next/link';
import Button from '../Button/Button';
import { Wrapper } from './PartnerWithUs.styled';

const PartnerWithUs = () => {
  return (
    <Wrapper>
      <h3>Partner with us</h3>
      <div>
        <div>
          <span>Sign up</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link href="/register/business">
            <Button text="Fabric seller" />
          </Link>
          <Link href="/register/business">
            <Button text="Tailor" />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default PartnerWithUs;
