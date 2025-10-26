import { getAutoreBySlug, getArticoli } from '@/lib/cosmic'
import { Autore, Articolo } from '@/types'
import ArticoloCard from '@/components/ArticoloCard'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function ChefPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const autore = await getAutoreBySlug(slug) as Autore | null
  
  if (!autore) {
    notFound()
  }
  
  const tuttiArticoli = await getArticoli() as Articolo[]
  const articoliAutore = tuttiArticoli.filter(
    a => a.metadata?.autore?.id === autore.id
  )
  
  const fotoProfilo = autore.metadata?.foto_profilo
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Chef Profile */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {fotoProfilo && (
            <div className="flex-shrink-0">
              <img 
                src={`${fotoProfilo.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                alt={autore.metadata.nome}
                className="w-48 h-48 rounded-full object-cover shadow-lg"
                width={300}
                height={300}
              />
            </div>
          )}
          
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-italian-green mb-4">
              {autore.metadata.nome}
            </h1>
            
            {autore.metadata?.biografia && (
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {autore.metadata.biografia}
              </p>
            )}
            
            {autore.metadata?.email && (
              <a 
                href={`mailto:${autore.metadata.email}`}
                className="inline-flex items-center gap-2 text-italian-green hover:text-darkGreen transition-colors font-semibold"
              >
                📧 {autore.metadata.email}
              </a>
            )}
          </div>
        </div>
      </section>
      
      {/* Chef's Recipes */}
      <section>
        <h2 className="text-3xl font-serif font-bold text-darkGreen mb-8">
          Ricette di {autore.metadata.nome}
        </h2>
        
        {articoliAutore.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Nessuna ricetta pubblicata ancora.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articoliAutore.map((articolo) => (
              <ArticoloCard key={articolo.id} articolo={articolo} />
            ))}
          </div>
        )}
      </section>
      
      {/* Back Link */}
      <div className="mt-12 text-center">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-italian-green hover:text-darkGreen transition-colors font-semibold"
        >
          ← Torna alle ricette
        </Link>
      </div>
    </div>
  )
}