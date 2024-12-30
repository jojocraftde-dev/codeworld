import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 to-blue-900 pt-32 pb-20 px-4">
      <div className="max-w-md mx-auto">
        <Card className="p-8 bg-gradient-to-br from-navy-800 to-blue-900 text-center">
          <div className="mb-6">
            <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4 font-display">Payment Successful!</h1>
          <p className="text-gray-300 mb-8">
            Thank you for your purchase. Your account has been upgraded successfully.
          </p>
          <div className="space-y-4">
            <Link href="/account">
              <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600">
                View Account
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full">
                Return Home
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}

