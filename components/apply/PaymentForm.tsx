'use client';

import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Loader2, Lock } from 'lucide-react';

interface Props {
  clientSecret: string;
  onPaymentSuccess: (paymentIntentId: string) => void;
}

export default function PaymentForm({ clientSecret, onPaymentSuccess }: Props) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    setLoading(true);
    setError('');

    const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card },
    });

    setLoading(false);

    if (stripeError) {
      setError(stripeError.message ?? 'Payment failed. Please try again.');
      return;
    }

    if (paymentIntent?.status === 'succeeded') {
      onPaymentSuccess(paymentIntent.id);
    }
  };

  return (
    <form onSubmit={handlePay} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Card Details</label>
        <div className="px-4 py-4 rounded-xl border border-slate-200 focus-within:border-[#F97066] focus-within:ring-2 focus-within:ring-[#F97066]/10 transition-colors bg-white">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '15px',
                  color: '#1e293b',
                  fontFamily: 'Inter, sans-serif',
                  '::placeholder': { color: '#94a3b8' },
                },
                invalid: { color: '#ef4444' },
              },
            }}
          />
        </div>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F97066] to-[#FB923C] hover:from-[#E85D53] hover:to-[#E8832A] text-white rounded-full py-3.5 font-semibold shadow-lg shadow-[#F97066]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Processing…</>
        ) : (
          <><Lock className="w-4 h-4" /> Pay $1.00</>
        )}
      </button>

      <p className="text-xs text-slate-400 text-center flex items-center justify-center gap-1.5">
        <Lock className="w-3 h-3" />
        Secured by Stripe. Your card info is never stored on our servers.
      </p>
    </form>
  );
}
