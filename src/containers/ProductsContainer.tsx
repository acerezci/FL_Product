import cx from 'classnames';
import React from 'react';
import { ProductResponseType } from '../types/responses';
import loader from '../assets/loader.svg';
import styles from '../styles/modules/products.module.scss';
import ProductItem from '../components/ProductItem';

interface Prop {
  products?: ProductResponseType;
  loading: boolean;
  error: boolean;
}

const ProductsContainer: React.FC<Prop> = ({ products, loading, error }) => {
  const productsWrapper = cx('container', styles.productsWrapper);

  return (
    <div className={productsWrapper}>
      {loading && <img src={loader} alt="loader" className={styles.loader} />}
      {error && (
        <h1 className={styles.error}>Hata daha sonra tekrar deneyiniz.</h1>
      )}
      {!error
        && !loading
        && products
        && products.map((product) => (
          <ProductItem
            id={product.id}
            name={product.name}
            image={product.image}
            colorLabel={product.properties.colorLabel}
            clothLabel={product.properties.clothLabel}
            genderLabel={product.properties.genderLabel}
            cutLabel={product.properties.cutLabel}
            sizeLabel={product.properties.sizeLabel}
            price={product.properties.price}
            year={product.properties.year}
          />
        ))}
    </div>
  );
};

export default ProductsContainer;
