import { getArticoliByCategoria, getCategorie } from '@/lib/cosmic'
import { Articolo, Categoria } from '@/types'
import ArticoloCard from '@/components/ArticoloCard'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function CategoriaPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const categorie = await getCategorie() as Categoria[]
  const categoria = categorie.find(c => c.slug === slug)
  
  if (!categoria) {
    notFound()
  }
  
  const articoli = await getArticoliByCategoria(categoria.id) as Articolo[]
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Category Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-italian-green mb-4">
          {categoria.metadata.nome}
        </h1>
        {categoria.metadata?.descrizione && (
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {categoria.metadata.descrizione}
          </p>
        )}
      </header>
      
      {/* Articles Grid */}
      {articoli.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-6">
            Nessuna ricetta disponibile in questa categoria al momento.
          </p>
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-italian-green text-white rounded-lg hover:bg-darkGreen transition-colors"
          >
            Torna alla home
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articoli.map((articolo) => (
            <ArticoloCard key={articolo.id} articolo={articolo} />
          ))}
        </div>
      )}
      
      {/* Back Link */}
      <div className="mt-12 text-center">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-italian-green hover:text-darkGreen transition-colors font-semibold"
        >
          ← Tutte le categorie
        </Link>
      </div>
    </div>
  )
}