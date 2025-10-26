import { getArticoloBySlug } from '@/lib/cosmic'
import { Articolo } from '@/types'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function ArticoloPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const articolo = await getArticoloBySlug(slug) as Articolo | null
  
  if (!articolo) {
    notFound()
  }
  
  const autore = articolo.metadata?.autore
  const categoria = articolo.metadata?.categoria
  const immagine = articolo.metadata?.immagine_principale
  
  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-italian-green mb-4">
          {articolo.metadata.titolo}
        </h1>
        
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
          {articolo.metadata?.tempo_preparazione && (
            <div className="flex items-center gap-2">
              <span className="text-2xl">⏱️</span>
              <span>{articolo.metadata.tempo_preparazione} minuti</span>
            </div>
          )}
          
          {articolo.metadata?.difficolta && (
            <div className="flex items-center gap-2">
              <span className="text-2xl">👨‍🍳</span>
              <span>{articolo.metadata.difficolta.value}</span>
            </div>
          )}
          
          {categoria && (
            <Link 
              href={`/categorie/${categoria.slug}`}
              className="px-3 py-1 bg-italian-green text-white rounded-full text-sm hover:bg-darkGreen transition-colors"
            >
              {categoria.metadata.nome}
            </Link>
          )}
        </div>
        
        {/* Author Info */}
        {autore && (
          <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
            {autore.metadata?.foto_profilo && (
              <img 
                src={`${autore.metadata.foto_profilo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                alt={autore.metadata.nome}
                className="w-16 h-16 rounded-full object-cover"
                width={80}
                height={80}
              />
            )}
            <div>
              <p className="text-sm text-gray-600">Ricetta di</p>
              <Link 
                href={`/chef/${autore.slug}`}
                className="text-lg font-semibold text-italian-green hover:text-darkGreen transition-colors"
              >
                {autore.metadata.nome}
              </Link>
            </div>
          </div>
        )}
      </header>
      
      {/* Featured Image */}
      {immagine && (
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <img 
            src={`${immagine.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
            alt={articolo.metadata.titolo}
            className="w-full h-auto"
            width={1200}
            height={600}
          />
        </div>
      )}
      
      {/* Content */}
      <div 
        className="prose-italian max-w-none"
        dangerouslySetInnerHTML={{ __html: articolo.metadata.contenuto }}
      />
      
      {/* Back Link */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-italian-green hover:text-darkGreen transition-colors font-semibold"
        >
          ← Torna alle ricette
        </Link>
      </div>
    </article>
  )
}