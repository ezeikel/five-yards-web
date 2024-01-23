import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ONBOARD_STRIPE_REFRESH_MUTATION } from '../../apollo/queries';

const Refresh = () => {
  const [onboardStripeRefresh] = useMutation(ONBOARD_STRIPE_REFRESH_MUTATION, {
    onCompleted({ onboardStripeRefresh: { url } }) {
      // redirect to Stripe Connect onboarding
      window.location.href = url;
    },
  });

  useEffect(() => {
    // TODO: trigger Stipe onboarding after user has signed up and is saved to db
    (async () => {
      await onboardStripeRefresh();
    })();
  }, []);

  return null;
};

export default Refresh;
