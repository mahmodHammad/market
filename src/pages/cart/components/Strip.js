import { loadStripe } from "@stripe/stripe-js";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51IoFwwAWo4uBcmc7Xy1DSsvv27WmtFWwbJyETudzGnUS2WmEBaD8BmVaD6eab5cWkRlg4EzNow49Lmta2V9NLmFX00hrGCam7m");


//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);

//     if (query.get("success")) {
//       setMessage("Order placed! You will receive an email confirmation.");
//     }

//     if (query.get("canceled")) {
//       setMessage(
//         "Order canceled -- continue to shop around and checkout when you're ready."
//       );
//     }
//   }, []);

  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const response = await fetch("https://nameless-falls-85436.herokuapp.com/create-checkout-session", {
      method: "POST",
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
      console.log("FUCKEN ERROR",result.error.message)
    }
  };


export default handleClick