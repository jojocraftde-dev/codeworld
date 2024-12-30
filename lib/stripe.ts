import { redirect } from 'next/navigation'
import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set')
}

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
  typescript: true,
})

export async function createCheckoutSession(data: FormData) {
  const priceId = data.get('priceId') as string
  
  if (!priceId) {
    throw new Error('Price ID is required')
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/cancel`,
    })

    if (!session.url) {
      throw new Error('Failed to create checkout session')
    }

    redirect(session.url)
  } catch (error) {
    console.error('Stripe checkout error:', error)
    throw new Error('Failed to create checkout session')
  }
}

