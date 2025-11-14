export const dynamic = "force-dynamic"

export default async function Page() {
  const API = process.env.BACKEND_URL
  const response = await fetch(`${API}/products`);
  const products = await response.json();
  console.log(products);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold mb-4">Nuestros Productos</h1>
          <p className="text-xl text-purple-100">Descubre nuestra colección exclusiva</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: any) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-100 to-indigo-100">
                <img
                  src={product.imageURL}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  ${product.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {product.description}
                </p>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg">
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
