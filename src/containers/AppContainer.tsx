import cx from 'classnames';
import React, { useEffect } from 'react';
import Header from '../components/Header';
import FilterMenu from '../components/FilterMenu';
import ProductsContainer from './ProductsContainer';
import Footer from '../components/Footer';
import '../styles/app.global.scss';
import styles from '../styles/modules/app.module.scss';

const AppContainer: React.FC = () => {
  useEffect(() => {
    fetch('http://localhost:8080')
      .then((response) => response.json())
      .then((response) => console.log(response));
  }, []);

  const appClasses = cx(styles.appWrapper);
  const mainSectionWrapper = cx('container', styles.mainSection);

  return (
    <div className={appClasses}>
      <Header />
      <section className={mainSectionWrapper}>
        <FilterMenu />
        <ProductsContainer />
      </section>
      <Footer />
    </div>
  );
};

export default AppContainer;
