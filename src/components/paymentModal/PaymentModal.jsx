import { RxCross2 } from "react-icons/rx";
import exitModal from "../../utils/exitModal";
import CheckoutForm from "../CheckoutForm"
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Button from "../Button/Button";
import { useState } from "react";
import ("./paymentModal.css")


const stripePromise = loadStripe('pk_test_51R3zzBKbSMLltar04jixYclUCbdx2F8yjb1n50OORrrYPJXUhwZTg6FnWHeCZsOCBydqDSzsIwNvdF9QZ7eSxjkK00GMdxVOJ5');

const PaymentModal = ({token, productDatas, setPaymentModal, setConnectionModal}) => {


if (!token){
    setConnectionModal("unauthorized")
    exitModal(setPaymentModal)
}

const shippingCosts = 395;

const protectionCosts = 40;

const total = productDatas.product_price * 100 + shippingCosts + protectionCosts

const [nextStepPayment, setNextStepPayment] = useState(null);

const options = {
    mode: 'payment',
    amount: total,
    currency: 'usd',
    // Fully customizable with appearance API.
    appearance: {/*...*/},
  };
  return (
    <>
      {token &&(
       
        <div className="modal-container" onClick={() => exitModal(setPaymentModal)}>
                {nextStepPayment === "payment" ?   <div className="wrapper-modal">
                  <div className="modal modal-payment"  onClick={(event) => event.stopPropagation()}>
            <div className="exit-modal-cross" >
            <RxCross2 onClick={() => exitModal(setPaymentModal)}/>
            </div>
            <div>Vous allez payer <span className="bold">{total / 100} €</span> à Vinted</div>

            {/* Payment */}
            <Elements stripe={stripePromise} options={options} >
      <CheckoutForm productDatas={productDatas} total={total} token={token}/>
    </Elements>
           
            
          </div></div> :   <div className="wrapper-modal"  onClick={(event) => event.stopPropagation()}>
            <div className="modal">
            <div className="exit-modal-cross">
            <RxCross2 onClick={() => exitModal(setPaymentModal)}/>
            </div>

            <div className="command-summary">
                <h3>Résumé de la commande</h3>

                <div className="command-summary-details">
                    <div><span>Commande</span><span>{productDatas.product_price && productDatas.product_price} €</span></div>
                    <div><span>Frais protection acheteurs</span><span>{shippingCosts / 100} €</span></div>
                    <div><span>Frais de port</span><span>{protectionCosts / 100 } €</span></div>
                </div>
                <hr />
                <div className="total">
                    <span >Total</span><span>{total / 100} € </span>
                </div>
                <div className="payment-message">Il ne vous reste plus qu'une étape pour vous offrir <span className="bold">{productDatas.product_name}</span>. Vous allez payer <span className="bold">{total / 100} €</span> (frais de port inclus)</div>
            </div>

            <Button classProps={"button-sale"} text={"Payer"} handleClick={() => {setNextStepPayment("payment")}}/>
           
            
          </div></div>}
         
        </div>
      ) 
      }
 

      
    </>
  );
}
export default PaymentModal