import { getArticoli, getCategorie } from '@/lib/cosmic'
import { Articolo, Categoria } from '@/types'
import ArticoloCard from '@/components/ArticoloCard'
import CategoryFilter from '@/components/CategoryFilter'

export default async function HomePage() {
  const articoli = await getArticoli() as Articolo[]
  const categorie = await getCategorie() as Categoria[]
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-italian-green mb-6">
          Benvenuti su Molto Bene
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Scopri le ricette autentiche della cucina italiana, raccontate dai nostri chef con passione e tradizione
        </p>
      </section>
      
      {/* Category Filter */}
      <CategoryFilter categorie={categorie} />
      
      {/* Featured Articles Grid */}
      <section className="mt-12">
        <h2 className="text-3xl font-serif font-bold text-darkGreen mb-8">
          Le Nostre Ricette
        </h2>
        
        {articoli.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Nessuna ricetta disponibile al momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articoli.map((articolo) => (
              <ArticoloCard key={articolo.id} articolo={articolo} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}