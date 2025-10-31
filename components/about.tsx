export default function About() {
  const skills = [
    { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "HTML/CSS"] },
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "UI/UX Design"] },
    { category: "Backend", items: ["Django", "Node.js", "MongoDB", "PostgreSQL"] },
    { category: "Tools", items: ["Git", "Excel", "Canva", "VS Code"] },
  ]

  const certifications = [
    "Full-Stack Web Development Internship",
    "Mobile App Development",
    "CRUD Academy - Weather & Camera Apps",
    "AI Heart Disease Detection (Techgium)",
  ]

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a 2nd-year Computer Science and Engineering student with a passion for building innovative digital
              solutions. My journey combines technical expertise with creative problem-solving, helping me create
              experiences that are both powerful and user-friendly.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I thrive in environments that challenge me to learn and grow, and I'm committed to delivering work that
              demonstrates teamwork, resilience, and discipline.
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-primary font-semibold mb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-muted text-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-foreground">Experience & Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="p-4 bg-muted rounded-lg border border-border hover:border-primary transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
