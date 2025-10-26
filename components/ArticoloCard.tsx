import Link from 'next/link'
import { Articolo } from '@/types'

interface ArticoloCardProps {
  articolo: Articolo
}

export default function ArticoloCard({ articolo }: ArticoloCardProps) {
  const immagine = articolo.metadata?.immagine_principale
  const categoria = articolo.metadata?.categoria
  const autore = articolo.metadata?.autore
  
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      {immagine && (
        <Link href={`/articoli/${articolo.slug}`}>
          <div className="relative h-48 overflow-hidden">
            <img 
              src={`${immagine.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
              alt={articolo.metadata.titolo}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              width={600}
              height={400}
            />
            {categoria && (
              <div className="absolute top-3 right-3">
                <span className="px-3 py-1 bg-italian-green text-white text-sm rounded-full shadow-md">
                  {categoria.metadata.nome}
                </span>
              </div>
            )}
          </div>
        </Link>
      )}
      
      <div className="p-6">
        <Link href={`/articoli/${articolo.slug}`}>
          <h3 className="text-xl font-serif font-bold text-darkGreen mb-3 hover:text-italian-green transition-colors">
            {articolo.metadata.titolo}
          </h3>
        </Link>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
          {articolo.metadata?.tempo_preparazione && (
            <div className="flex items-center gap-1">
              <span>⏱️</span>
              <span>{articolo.metadata.tempo_preparazione} min</span>
            </div>
          )}
          
          {articolo.metadata?.difficolta && (
            <div className="flex items-center gap-1">
              <span>👨‍🍳</span>
              <span>{articolo.metadata.difficolta.value}</span>
            </div>
          )}
        </div>
        
        {autore && (
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            {autore.metadata?.foto_profilo && (
              <img 
                src={`${autore.metadata.foto_profilo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                alt={autore.metadata.nome}
                className="w-10 h-10 rounded-full object-cover"
                width={80}
                height={80}
              />
            )}
            <div>
              <p className="text-xs text-gray-500">Ricetta di</p>
              <Link 
                href={`/chef/${autore.slug}`}
                className="text-sm font-semibold text-italian-green hover:text-darkGreen transition-colors"
              >
                {autore.metadata.nome}
              </Link>
            </div>
          </div>
        )}
        
        <Link 
          href={`/articoli/${articolo.slug}`}
          className="inline-block mt-4 px-4 py-2 bg-italian-green text-white rounded-md hover:bg-darkGreen transition-colors font-medium"
        >
          Leggi la ricetta
        </Link>
      </div>
    </article>
  )
}