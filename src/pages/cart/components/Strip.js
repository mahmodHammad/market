import { loadStripe } from "@stripe/stripe-js";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_live_51IoFwwAWo4uBcmc7MCyJjlI4d32GlmWv1foQuMAC3N1viJA8ynwle49YCsNBmNzVH2Vsg6ihL3a9eXAm14FwrYSv00HUmmeauY");


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

  const handleClick = async (body) => {
    const stripe = await stripePromise;
    const response = await fetch("https://nodejsserv.terraform.live/create-checkout-session", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
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
      console.log("ERROR",result.error.message)
    }
  };


export default handleClick