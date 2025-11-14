export const dynamic = "force-dynamic"

export default async function Page() {
  const API = process.env.BACKEND_URL
  const response = await fetch(`${API}/products`);
  const products = await response.json();
  console.log(products);

  return (
    <div>
      <h1>Products</h1>

      <div className="grid grid-cols-3 gap-4 p-20 container mx-auto">
        {products.map((product: any) => (
          <div className="bg-white p-5 text-black">
            <h1>{product.name}</h1>
            <img src={product.imageURL} alt="" />
            <h3>{product.price}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
