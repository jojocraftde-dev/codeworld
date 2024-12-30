import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

if (!process.env.STRIPE_WEBHOOK_SECRET) {
  throw new Error('STRIPE_WEBHOOK_SECRET is not set')
}

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get('Stripe-Signature')

  if (!signature) {
    return new Response('No signature found', { status: 400 })
  }

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    )

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        // Handle successful checkout
        console.log('Checkout completed:', session.id)
        break
      }
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        // Handle subscription updates
        console.log('Subscription updated:', subscription.id)
        break
      }
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        // Handle subscription cancellations
        console.log('Subscription cancelled:', subscription.id)
        break
      }
    }

    return new Response(null, { status: 200 })
  } catch (error) {
    console.error('Webhook error:', error)
    return new Response(
      `Webhook Error: ${error instanceof Error ? error.message : 'Unknown Error'}`,
      { status: 400 }
    )
  }
}

