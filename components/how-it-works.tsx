import { Code, Share2, Users, DollarSign } from 'lucide-react'

export function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-[#141C38]/50 rounded-lg mx-4">
      <h2 className="text-4xl mb-8 text-center font-display">How It Works</h2>
      <div className="timetable max-w-4xl mx-auto">
        {[
          { icon: Code, title: 'Create', desc: 'Create your project and upload it to our platform' },
          { icon: Share2, title: 'Share', desc: 'Share your project with the community and get feedback' },
          { icon: Users, title: 'Collaborate', desc: 'Collaborate with other developers to improve your project' },
          { icon: DollarSign, title: 'Earn', desc: 'Earn rewards based on the popularity and quality of your project' },
        ].map((step, i) => (
          <div key={i} className="timetable-item">
            <div className="font-bold flex items-center">
              <div className="bg-[#3B82F6]/20 p-3 rounded-lg mr-2">
                <step.icon className="w-6 h-6" />
              </div>
              {step.title}
            </div>
            <div className="text-[#e0e0e0]">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

