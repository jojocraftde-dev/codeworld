'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Loader2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

export default function AccountPage() {
  const [loading, setLoading] = useState(true)
  const [subscription, setSubscription] = useState<any>(null)
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    async function getSubscription() {
      try {
        const response = await fetch('/api/subscription')
        const data = await response.json()
        setSubscription(data)
      } catch (error) {
        console.error('Error fetching subscription:', error)
      } finally {
        setLoading(false)
      }
    }

    getSubscription()
  }, [sessionId])

  if (loading) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="card p-8">
          <h1 className="text-3xl font-bold mb-6 font-display">Account Settings</h1>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Subscription Status</h2>
              <p className="text-[#e0e0e0]">
                {subscription?.status === 'active' 
                  ? 'Your subscription is active' 
                  : 'No active subscription'}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Current Plan</h2>
              <p className="text-[#e0e0e0] mb-4">
                {subscription?.plan || 'No active plan'}
              </p>
              <Button
                variant="outline"
                className="border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white"
              >
                Manage Subscription
              </Button>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Usage Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4 bg-[#141C38]">
                  <h3 className="text-sm text-[#a0a0a0]">Total Uploads</h3>
                  <p className="text-2xl font-bold">0</p>
                </Card>
                <Card className="p-4 bg-[#141C38]">
                  <h3 className="text-sm text-[#a0a0a0]">Storage Used</h3>
                  <p className="text-2xl font-bold">0 MB</p>
                </Card>
                <Card className="p-4 bg-[#141C38]">
                  <h3 className="text-sm text-[#a0a0a0]">API Calls</h3>
                  <p className="text-2xl font-bold">0</p>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

