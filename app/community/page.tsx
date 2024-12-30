import { Button } from '@/components/ui/button'
import { Code } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import { listImages } from '@/lib/blob'

async function getProjects() {
  const blobs = await listImages()
  return blobs.map((blob) => ({
    id: blob.pathname,
    title: 'Project Title', // TODO: Store and retrieve actual project data
    description: 'Project Description',
    author: 'Author Name',
    avatar: '/placeholder.svg?height=40&width=40',
    image: blob.url,
    likes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 20),
    tags: ['Tag1', 'Tag2', 'Tag3'],
  }))
}

export default async function CommunityPage() {
  const projects = await getProjects()

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold font-display text-white">Community Projects</h1>
          <Button className="btn-glow">
            <Code className="mr-2" />
            Share Your Project
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

