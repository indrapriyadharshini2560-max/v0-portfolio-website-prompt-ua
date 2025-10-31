"use client"

import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react"

export default function Contact() {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:indra@example.com", label: "Email" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-muted">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title mb-6">Let's Connect</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to
          collaborate or just chat!
        </p>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-background rounded-lg border border-border">
            <Mail className="text-primary mb-3 mx-auto" size={28} />
            <p className="text-sm text-muted-foreground mb-2">Email</p>
            <a href="mailto:indra@example.com" className="text-primary hover:text-primary/80 font-semibold">
              indra@example.com
            </a>
          </div>
          <div className="p-6 bg-background rounded-lg border border-border">
            <Phone className="text-primary mb-3 mx-auto" size={28} />
            <p className="text-sm text-muted-foreground mb-2">Phone</p>
            <a href="tel:+919876543210" className="text-primary hover:text-primary/80 font-semibold">
              +91 98765 43210
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-12">
          <p className="text-sm text-muted-foreground mb-6">Follow me on social media</p>
          <div className="flex gap-4 justify-center flex-wrap">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all group"
                >
                  <Icon className="text-primary group-hover:scale-110 transition-transform" size={24} />
                </a>
              )
            })}
          </div>
        </div>

        {/* Contact Form */}
        <form className="max-w-2xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
