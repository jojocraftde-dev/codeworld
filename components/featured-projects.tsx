import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Code, ThumbsUp } from 'lucide-react'

export function FeaturedProjects() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl mb-8 text-center font-display">Featured Projects</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="card p-6 animate-float" style={{
            background: 'linear-gradient(135deg, #141C38 0%, #1E3A8A 100%)',
            animationDelay: `${(i - 1) * 0.2}s`
          }}>
            <h3 className="text-2xl mb-4 flex items-center font-display">
              <Code className="mr-2" />
              Awesome Project {i}
            </h3>
            <p className="mb-4 text-[#e0e0e0]">A brief description of the project goes here.</p>
            <div className="flex justify-between items-center">
              <span className="flex items-center">
                <ThumbsUp className="mr-2" />
                {Math.floor(Math.random() * 50) + 30}
              </span>
              <Button className="btn-glow rounded-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB]">
                View Project
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

