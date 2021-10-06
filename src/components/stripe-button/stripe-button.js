import react from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({ price }) => {
	const priceForStripe= price * 100;
	const publishableKey='pk_test_51JhJfAGMPE3pLnPfIc3GLdFCCYA1qmfKniZTV1P2ExH4KKKEe0TyIAKnWjZym4LTM6tuCkaRNAfbkrfy1ExF3IMO00xslgBG32'
	const onToken = token => {
		console.log(token);
		alert('payment succesful')
	}
	return (
		<StripeCheckout
		 label='pay now'
		 name='Ecommerce Ltd.'
		 billingAdress
		 shippingAddress
		 image='https://svgshare.com/i/CUz.svg'
      	description={`Your total is $${price}`}
     	amount={priceForStripe}
      	panelLabel='Pay Now'
     	 token={onToken}
     	 stripeKey={publishableKey}
     	 />
	)
}

export default StripeCheckoutButton;