import { Code, Smartphone, Palette, TrendingUp, Pen } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description: "Building robust and scalable web applications from frontend to backend",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Creating intuitive mobile applications for iOS and Android platforms",
    },
    {
      icon: Palette,
      title: "UI/UX & Frontend Design",
      description: "Designing beautiful, user-centered interfaces with modern aesthetics",
    },
    {
      icon: TrendingUp,
      title: "Affiliate Marketing",
      description: "Strategic marketing solutions to boost your online presence and reach",
    },
    {
      icon: Pen,
      title: "Logo & Graphic Design",
      description: "Custom logo and graphic design using Canva and professional tools",
    },
  ]

  return (
    <section id="services" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-12">Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group p-8 bg-muted rounded-lg border border-border hover:border-primary hover:bg-background transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={24} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
