import cx from 'classnames';
import React from 'react';
import Logo from '../assets/logo.svg';
import Basket from '../assets/basket.svg';
import Search from './Search';
import styles from '../styles/modules/header.module.scss';

const Header:React.FC = () => {
  const headerClasses = cx('container', styles.header);
  const siteNameClasses = cx('offMargin');
  const sectionWrapper = cx(styles.headerSection);

  return (
    <header className={headerClasses}>
      <div className={styles.siteLogo}>
        <img src={Logo} alt="logo" className={styles.logoImage} />
        <h3 className={siteNameClasses}>Kaliteli Giyim</h3>
      </div>
      <section className={sectionWrapper}>
        <img src={Basket} alt="basket" className={styles.basketImage} />
        <Search />
      </section>
    </header>
  );
};

export default Header;
