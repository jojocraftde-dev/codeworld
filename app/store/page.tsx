import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { createCheckoutSession } from '@/lib/stripe'

const tiers = [
  {
    name: 'Free',
    price: '0',
    features: [
      'Limited uploads',
      'Basic traffic analytics',
      'Community access',
      'Card verification required',
    ],
    priceId: 'price_free',
  },
  {
    name: 'Plus',
    price: '10',
    features: [
      'Unlimited uploads',
      'Advanced analytics',
      'Priority support',
      'Custom profile',
    ],
    priceId: 'price_plus',
  },
  {
    name: 'Ultra',
    price: '25',
    features: [
      'Everything in Plus',
      'API access',
      'Custom domain',
      'Dedicated support',
    ],
    priceId: 'price_ultra',
  },
]

export default function StorePage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 font-display text-white">
          Choose Your Plan
        </h1>
        <p className="text-xl text-center mb-12 text-gray-300">
          Select the perfect plan for your needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className="p-8 bg-[#0A0A0A] border border-gray-800"
            >
              <h2 className="text-2xl font-bold mb-4 font-display text-white">{tier.name}</h2>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${tier.price}</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-300">
                    <Check className="text-blue-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <form action={createCheckoutSession}>
                <input type="hidden" name="priceId" value={tier.priceId} />
                <Button
                  type="submit"
                  className="w-full btn-glow rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                >
                  Get Started
                </Button>
              </form>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

