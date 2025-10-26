import Link from 'next/link'
import { Categoria } from '@/types'

interface CategoryFilterProps {
  categorie: Categoria[]
}

export default function CategoryFilter({ categorie }: CategoryFilterProps) {
  if (!categorie || categorie.length === 0) {
    return null
  }
  
  return (
    <section id="categorie" className="mb-12">
      <h2 className="text-3xl font-serif font-bold text-darkGreen mb-6 text-center">
        Esplora per Categoria
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categorie.map((categoria) => (
          <Link 
            key={categoria.id}
            href={`/categorie/${categoria.slug}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-italian-green">
              <h3 className="text-2xl font-serif font-bold text-italian-green mb-3 group-hover:text-darkGreen transition-colors">
                {categoria.metadata.nome}
              </h3>
              {categoria.metadata?.descrizione && (
                <p className="text-gray-600 leading-relaxed">
                  {categoria.metadata.descrizione}
                </p>
              )}
              <div className="mt-4 flex items-center gap-2 text-italian-green group-hover:text-darkGreen transition-colors font-semibold">
                <span>Scopri le ricette</span>
                <span>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}