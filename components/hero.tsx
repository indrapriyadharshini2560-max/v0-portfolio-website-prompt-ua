"use client"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 bg-background relative overflow-hidden">
      <div
        className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
        style={{
          background: "linear-gradient(135deg, oklch(0.65 0.22 320), oklch(0.58 0.25 200))",
        }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse"
        style={{
          background: "linear-gradient(135deg, oklch(0.58 0.25 200), oklch(0.68 0.24 40))",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Indra</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">Full-Stack Developer</p>
          <p className="text-lg text-primary font-medium tracking-wide">AI & WEB ENTHUSIAST</p>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          2nd-year CSE student with expertise in full-stack development, mobile apps, and AI technologies. Passionate
          about crafting innovative digital solutions with attention to design and user experience.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap mt-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary/40 text-foreground rounded-lg font-semibold hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="text-primary">↓</div>
        </div>
      </div>
    </section>
  )
}
