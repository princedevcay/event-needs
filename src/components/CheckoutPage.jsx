import { useState } from 'react';
import { Button, useToast } from '@chakra-ui/react';
import { loadStripe } from '@stripe/stripe-js';

const CheckoutPage = ({ selectedPackage }) => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleCheckout = async () => {
  setIsLoading(true);

  try {
    if (!selectedPackage) {
      throw new Error('No package selected');
    }
    console.log('Selected package priceId:', selectedPackage.priceId);
    const stripe = await loadStripe('pk_test_clJdYwU2hRrSj8XDq69ncXGO');

    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sk_test_Y8R51ST7H6KszolJwH5AbJNv',
      },
      body: JSON.stringify({
        payment_method_types: ['card'],
        line_items: [{
          price: selectedPackage.priceId,
          quantity: 1,
        }],
        mode: 'subscription',
        success_url: 'https://event-needs.com/thank-you',
        cancel_url: 'https://event-needs.com',
        // No line_items here since we're using sessionId
      }),
    });

    const session = await response.json();

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    await stripe.redirectToCheckout({ sessionId: session.id });
  } catch (error) {
    console.error('Error initiating checkout:', error);
    toast({
      title: 'Error',
      description: 'Failed to initiate checkout',
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
  }

  setIsLoading(false);
};


  return (
    <Button colorScheme='brown' onClick={handleCheckout} isLoading={isLoading}>
      Proceed to Stripe Checkout
    </Button>
  );
};

export default CheckoutPage;
