import cx from 'classnames';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import Basket from '../assets/basket.svg';
import Search from './Search';
import styles from '../styles/modules/header.module.scss';
import basketSelector from '../selectors/basketSelector';
import BasketItem from './BasketItem';

const Header: React.FC = () => {
  const headerClasses = cx('container', styles.header);
  const siteNameClasses = cx('offMargin');
  const sectionWrapper = cx(styles.headerSection);
  const [showBasket, setShowBasket] = useState(false);

  const basket = useSelector(basketSelector);

  const checkBasket = () => {
    setShowBasket((state) => !state);
  };

  return (
    <header className={headerClasses}>
      <div className={styles.siteLogo}>
        <img src={Logo} alt="logo" className={styles.logoImage} />
        <h3 className={siteNameClasses}>Kaliteli Giyim</h3>
      </div>
      <section className={sectionWrapper}>
        <div className={styles.basketWrapper} onClick={checkBasket} aria-hidden>
          <div className={styles.length}>{basket.data.length}</div>
          <img src={Basket} alt="basket" className={styles.basketImage} />
        </div>
        <Search />
      </section>

      {showBasket && (
        <div className={styles.basketContainer}>
          {basket.data &&
            basket.data.length > 0 &&
            basket.data.map((item) => (
              <BasketItem
                key={item.id}
                id={item.id}
                clothLabel={item.clothLabel}
                colorLabel={item.colorLabel}
                cutLabel={item.cutLabel}
                genderLabel={item.genderLabel}
                sizeLabel={item.sizeLabel}
                name={item.name}
                image={item.image}
                price={item.price}
                year={item.year}
              />
            ))}
        </div>
      )}
    </header>
  );
};

export default Header;
