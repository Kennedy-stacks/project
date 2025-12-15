import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useCart } from '../contexts/CartContext';
import './Payment.css';

// Initialize Stripe with your publishable key
// Get your test key from https://dashboard.stripe.com/test/apikeys
const stripePromise = loadStripe('pk_test_YOUR_STRIPE_PUBLISHABLE_KEY_HERE');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const subtotal = getCartTotal();
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    // Here you would typically send the payment method to your server
    // For demo purposes, we'll simulate a successful payment
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      setSuccess(true);
      clearCart(); // Clear cart after successful payment
      setLoading(false);
    } catch {
      setError('Payment failed. Please try again.');
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="payment-success">
        <h2>Payment Successful!</h2>
        <p>Thank you for your purchase. Your order has been processed.</p>
        <button onClick={() => window.location.href = '/'} className="back-btn">
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h2>Complete Your Payment</h2>

      <div className="order-summary">
        <h3>Order Summary</h3>
        {cartItems.map(item => (
          <div key={item.id} className="order-item">
            <span>{item.name} (x{item.quantity})</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="order-item">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="order-total">
          <span>Total: ${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="card-element-container">
        <label>Card Information</label>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>

      {error && <div className="error-message">{error}</div>}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="pay-btn"
      >
        {loading ? 'Processing...' : `Pay $${total.toFixed(2)}`}
      </button>
    </form>
  );
};

const Payment = () => {
  return (
    <div className="payment-page">
      <div className="payment-container">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;