import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b-4 border-italian-green shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="text-4xl">🍝</span>
            <div>
              <h1 className="text-2xl font-serif font-bold text-italian-green">
                Molto Bene
              </h1>
              <p className="text-xs text-gray-600">Cucina Italiana Autentica</p>
            </div>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/"
              className="text-gray-700 hover:text-italian-green transition-colors font-medium"
            >
              Ricette
            </Link>
            <Link 
              href="/#categorie"
              className="text-gray-700 hover:text-italian-green transition-colors font-medium"
            >
              Categorie
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}