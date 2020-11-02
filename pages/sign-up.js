import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ONBOARD_STRIPE_USER_MUTATION } from "../apollo/queries";

const SignUp = () => {
  const [onboardStripeUser] = useMutation(ONBOARD_STRIPE_USER_MUTATION, {
    onCompleted({ onboardStripeUser: { url } }) {
      // redirect to Stripe Connect onboarding
      window.location.href = url;
    },
  });

  useEffect(() => {
    // TODO: trigger Stipe onboarding after user has signed up and is saved to db
    (async () => {
      await onboardStripeUser();
    })();
  }, []);

  return null;
};

export default SignUp;
