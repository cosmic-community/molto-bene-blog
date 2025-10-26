export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-italian-green"></div>
      <p className="mt-4 text-gray-600 text-lg">Caricamento...</p>
    </div>
  )
}