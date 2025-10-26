export default function Footer() {
  return (
    <footer className="bg-darkGreen text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🍝</span>
              <h3 className="text-2xl font-serif font-bold">Molto Bene</h3>
            </div>
            <p className="text-green-100 leading-relaxed">
              Il tuo blog dedicato alle ricette autentiche della cucina italiana tradizionale
            </p>
          </div>
          
          {/* Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Informazioni</h4>
            <p className="text-green-100">
              Scopri le ricette della tradizione culinaria italiana, raccontate con passione dai nostri chef esperti
            </p>
          </div>
          
          {/* Credits */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Powered by</h4>
            <p className="text-green-100">
              Costruito con Next.js 16 e Cosmic CMS per un'esperienza ottimale
            </p>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-100">
          <p>&copy; {new Date().getFullYear()} Molto Bene. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}