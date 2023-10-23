import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../../../config";
import { addToCart } from "../../../redux/cartRedux";
import { useEffect, useState } from "react";
import { getProductsRequest } from "../../../redux/productsRedux";
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector((state) => state.products.data);
  const [product, setProduct] = useState(null);
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleThumbnailClick = (index) => {
    setActiveThumbnail(index);
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ ...product, quantity }));
    }
  };

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProductsRequest());
    }

    for (let item of products) {
      if (item.id === id) {
        setProduct(item);
        break;
      }
    }
  }, [dispatch, products, id]);

  return (
    <div className="container mt-5">
      {product ? (
        <div className="row">
          <div className="col-md-6">
          <div className={`${styles.customMainImageContainer}`}>
              <img
                className={styles.customMainImage}
                src={`${IMG_URL}/${product.name.replace(/ /g, '')}${activeThumbnail + 1}.jpg`}
                alt={product.name}
              />
            </div>
            <div className={`d-flex flex-row ${styles.customThumbnail}`}>
              {Array.from({ length: 4 }, (_, index) => (
                <img
                  key={index}
                  className={`${styles.customThumbnail} ${activeThumbnail === index ? styles.active : ''}`}
                  src={`${IMG_URL}/${product.name.replace(/ /g, '')}${index + 1}.jpg`}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
            
          </div>
          <div className="col-md-6">
            <h2 className={styles.text}>{product.name}</h2>
            <p className={styles.text}>Price: {product.price} PLN</p>
            <div className="mb-3">
              <label htmlFor="quantity" className={styles.label}>
                Quantity:
              </label>
              <div className="input-group">
                <span className={styles.inputBtnGroup}>
                  <button
                    type="button"
                    className={`btn btn-primary ${styles.bthv}`} style={{background: '#4caf50', border: '#4caf50'}}
                    onClick={handleDecrementQuantity}
                  >
                    -
                  </button>
                </span>
              <input
                type="number"
                className={styles.formControl}
                id="quantity"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
              />
              <span className={styles.inputBtnGroup}>
                  <button
                    type="button"
                    className={`btn btn-primary ${styles.bthv}`} style={{background: '#4caf50', border: '#4caf50'}}
                    onClick={handleIncrementQuantity}
                  >
                    +
                  </button>
                </span>
                </div>
            </div>
            <button onClick={handleAddToCart} className={`btn btn-primary ${styles.bthv}`} style={{background: '#4caf50', border: '#4caf50'}}>
              Add to Cart
            </button>
            <p className={`mt-4 ${styles.text}`}>{product.description}</p>
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductPage;
