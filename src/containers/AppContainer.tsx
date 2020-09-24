import cx from 'classnames';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import FilterMenu from '../components/FilterMenu';
import ProductsContainer from './ProductsContainer';
import '../styles/app.global.scss';
import styles from '../styles/modules/app.module.scss';

const AppContainer: React.FC = () => {
  const [products, setProducts] = useState<ProductResponseType>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then((response) => response.json())
      .then((response) => setProducts(response.data))
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          setError(false);
        }, 500);
      })
      .catch(() => {
        setTimeout(() => {
          setLoading(false);
          setError(true);
        }, 500);
      });
  }, []);

  const appClasses = cx(styles.appWrapper);
  const mainSectionWrapper = cx('container', styles.mainSection);

  return (
    <div className={appClasses}>
      <Header />
      <section className={mainSectionWrapper}>
        <FilterMenu setError={setError} setLoading={setLoading} setProducts={setProducts} />
        <ProductsContainer error={error} loading={loading} products={products} />
      </section>
    </div>
  );
};

export type ProductResponseType = Array<{
  id: number;
  name: string;
  image: string;
  properties: {
    cloth: string;
    clothLabel: string;
    color: string;
    colorLabel: string;
    cut: string;
    cutLabel: string;
    gender: string;
    genderLabel: string;
    size: string;
    sizeLabel: string;
    price: number;
    year: number;
  };
}>;

export default AppContainer;
