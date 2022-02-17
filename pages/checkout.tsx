import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/forms/CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51HhLckIcEiXstoRdj60NhMPaqqznU34fTsTEhf8OkmcSK1mLHQpNVU0svyoG4nGEybPLiMxNmuXCFI5a13EdOU2K009dtUMukM",
);

const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Checkout;
