import { stripe } from '@/lib/stripe'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // In a real app, you'd get the customer ID from the authenticated user
    const customerId = 'cus_xxx'
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: 'active',
      expand: ['data.default_payment_method'],
    })

    const subscription = subscriptions.data[0]

    return NextResponse.json({
      status: subscription?.status,
      plan: subscription?.items.data[0].price.nickname,
    })
  } catch (error) {
    console.error('Error fetching subscription:', error)
    return NextResponse.json(
      { error: 'Error fetching subscription' },
      { status: 500 }
    )
  }
}

