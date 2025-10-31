import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Excel Dashboard",
      description: "Hospital patient data management system with comprehensive analytics and visualization",
      tech: ["Excel", "Data Analysis", "Dashboard Design"],
      link: "#",
    },
    {
      title: "Flight Ticket Booking Web App",
      description: "Full-stack flight booking system with dynamic pricing and real-time availability",
      tech: ["React", "Django", "MongoDB", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Library Book Management",
      description: "Backend system for managing library records, book inventory, and user checkouts",
      tech: ["Python", "Django", "PostgreSQL", "REST API"],
      link: "#",
    },
    {
      title: "AI Heart Disease Detection",
      description: "Machine learning model for predicting heart disease risk using health metrics",
      tech: ["Python", "ML", "Data Science", "TensorFlow"],
      link: "#",
    },
    {
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts and interactive UI",
      tech: ["React", "API Integration", "Geolocation"],
      link: "#",
    },
    {
      title: "Camera App",
      description: "Mobile camera application with image capture, editing, and gallery management",
      tech: ["React Native", "CRUD Operations", "File Handling"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-background rounded-lg border border-border p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
