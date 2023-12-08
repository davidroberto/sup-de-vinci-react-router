const ProductCard = ({ product }) => {
  return (
    <article>
      <h3>{product.title}</h3>
      <p>Prix : {product.price}</p>
      <p>Rating : {product.rating}</p>
    </article>
  );
};

export default ProductCard;
