import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const PaymentSucceed = ({setPaymentModal}) => {

    const navigate = useNavigate()
return  <div className="modal-container" onClick={() => navigate("/")}>
     <div className="wrapper-modal" onClick={(event) => event.stopPropagation()}>
<div className="modal payment-succeed">
 Paiement effectué avec succès !
 <Link to={"/"}>Revenir à la page d'accueil</Link>
  
</div></div>
</div>
}
export default PaymentSucceed