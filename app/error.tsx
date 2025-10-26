'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-serif font-bold text-italian-red mb-4">Errore</h1>
      <h2 className="text-3xl font-serif font-semibold text-darkGreen mb-6">
        Qualcosa è andato storto
      </h2>
      <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
        Si è verificato un errore imprevisto. Riprova o torna alla home page.
      </p>
      <div className="flex gap-4 justify-center">
        <button
          onClick={reset}
          className="px-8 py-3 bg-italian-green text-white rounded-lg hover:bg-darkGreen transition-colors font-semibold"
        >
          Riprova
        </button>
        <Link 
          href="/"
          className="px-8 py-3 bg-white text-italian-green border-2 border-italian-green rounded-lg hover:bg-gray-50 transition-colors font-semibold"
        >
          Torna alla home
        </Link>
      </div>
    </div>
  )
}