import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { useState } from 'react';
import Spinner from './Spinner';
import axios from "axios"
import { useParams } from 'react-router-dom';


const CheckoutForm = ({productDatas, total, token}) => {
    const stripe = useStripe();
  const elements = useElements();
  

  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  const handleError = (error) => {
    setLoading(false);
    setErrorMessage(error.message);
  }
  

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setLoading(true);

    // Trigger form validation and wallet collection
    const {error: submitError} = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

try {
  const res = await axios.post(`${import.meta.env.VITE_API_URL}/create-intent`, {
  price : total
})
    const clientSecret = res.data.client_secret

    console.log(productDatas);
    
    const updateOffer = await axios.put(`${import.meta.env.VITE_API_URL}/offer/updateSold/${productDatas._id}`, {
        sold: true,
      }, {
        headers : {
          authorization: `Bearer ${token}`
        }
      })

      console.log(updateOffer);
    // Confirm the PaymentIntent using the details collected by the Payment Element
    const {error} = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://localhost:5173/succeed`,
      },
    });


    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      handleError(error);
    } else {
      // Your customer is redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer is redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
      
      

    }
} catch (error) {
  setErrorMessage(error.message + ": Le paiement a échoué, veuillez recommencer...")
  setLoading(false)
}

  };

return  <form onSubmit={handleSubmit}>
<PaymentElement />
{loading ? <Spinner/> : errorMessage ? null : <button type="submit" disabled={!stripe || loading}>
  Submit Payment
</button>}

{errorMessage && <div className='payment-error'>{errorMessage}</div>}
</form>
}
export default CheckoutForm