"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "WORK", href: "#projects" },
    { label: "SERVICES", href: "#services" },
    { label: "CONTACT", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 w-full bg-background/60 backdrop-blur-xl border-b border-border z-50">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text tracking-wider">Indra</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link" onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
