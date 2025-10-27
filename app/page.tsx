import { getArticoli, getCategorie } from '@/lib/cosmic'
import { Articolo, Categoria } from '@/types'
import ArticoloCard from '@/components/ArticoloCard'
import CategoryFilter from '@/components/CategoryFilter'

export default async function HomePage() {
  const articoli = await getArticoli() as Articolo[]
  const categorie = await getCategorie() as Categoria[]
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section with Beautiful Image */}
      <section className="relative mb-16">
        {/* Background Image Container */}
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=2000&h=1200&fit=crop&auto=format,compress"
            alt="Fresh Italian pasta being made by hand"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>
        
        {/* Floating Text Card */}
        <div className="relative -mt-32 mx-auto max-w-4xl px-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 border-t-4 border-italian-green">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-italian-green mb-6 text-center">
              Benvenuti su Molto Bene
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              Scopri le ricette autentiche della cucina italiana, raccontate dai nostri chef con passione e tradizione
            </p>
          </div>
        </div>
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