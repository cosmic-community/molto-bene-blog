import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-serif font-bold text-italian-green mb-4">404</h1>
      <h2 className="text-3xl font-serif font-semibold text-darkGreen mb-6">
        Pagina non trovata
      </h2>
      <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
        Spiacenti, la pagina che stai cercando non esiste o è stata spostata.
      </p>
      <Link 
        href="/"
        className="inline-block px-8 py-3 bg-italian-green text-white rounded-lg hover:bg-darkGreen transition-colors font-semibold"
      >
        Torna alla home
      </Link>
    </div>
  )
}