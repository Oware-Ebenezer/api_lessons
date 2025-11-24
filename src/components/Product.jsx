function Product({ title, price, inStock, category }) {
  return (
    <section className="flex flex-col items-center bg-amber-200">
      <h1 className="font-bold text-2xl text-gray-500">{title}</h1>
      <p>Price: ${price}</p>
      <p>In Stock {inStock ? "Yes" : "No"}</p>
      <p>Category: {category.join(", ")}</p>
    </section>
  );
}
export default Product;
