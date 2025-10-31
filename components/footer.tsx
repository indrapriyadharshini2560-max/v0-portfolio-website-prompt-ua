export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto text-center text-muted-foreground text-sm">
        <p>© {currentYear} Indra Priyadharshini. All rights reserved.</p>
        <p className="mt-2">Crafted with passion and creative excellence.</p>
      </div>
    </footer>
  )
}
