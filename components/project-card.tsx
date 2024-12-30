import { Card } from '@/components/ui/card'
import { Heart, MessageCircle, Share2 } from 'lucide-react'
import Image from 'next/image'

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    author: string
    avatar: string
    image: string
    likes: number
    comments: number
    tags: string[]
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-[#0A0A0A] border border-gray-800">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative h-[300px]">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={project.avatar}
              alt={project.author}
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-gray-300">{project.author}</span>
          </div>
          <h2 className="text-2xl font-bold mb-2 text-white">{project.title}</h2>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
              <Heart className="w-5 h-5" />
              {project.likes}
            </button>
            <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
              <MessageCircle className="w-5 h-5" />
              {project.comments}
            </button>
            <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}

