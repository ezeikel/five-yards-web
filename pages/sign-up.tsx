import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ONBOARD_STRIPE_USER_MUTATION } from "../apollo/queries";

const SignUp = () => {
  const [onboardStripeUser] = useMutation(ONBOARD_STRIPE_USER_MUTATION, {
    onCompleted({ onboardStripeUser: { url } }) {
      // redirect to stripe connect onboarding flow
      window.location.href = url;
    },
  });

  useEffect(() => {
    // TODO: trigger Stipe onboarding after user has signed up and is saved to db
    (async () => {
      await onboardStripeUser();
    })();
  }, []);

  return (
    <div>
      <h1>Redirecting you to Stripe. Please wait...</h1>
    </div>
  );
};

export default SignUp;
