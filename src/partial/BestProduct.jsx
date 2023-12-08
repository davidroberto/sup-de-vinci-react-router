import ProductCard from "./ProductCard";

const BestProduct = ({ products }) => {
  const productSortedByRating = products.sort((a, b) => b.rating - a.rating);
  const bestProduct = productSortedByRating[0];

  return (
    <section>
      <h2>Le produit le mieux noté : </h2>
      <ProductCard product={bestProduct} />
    </section>
  );
};

export default BestProduct;
