import React from 'react';
import styles from '../styles/modules/products.module.scss';
import { useAppDispatch } from '../store';
import { BasketActions } from '../store/basket/reducers';
import plus from '../assets/plus.svg';

const ProductItem: React.FC<ProductItemType> = (props) => {
  const dispatch = useAppDispatch();

  const addBasket = () => {
    dispatch(BasketActions.addBasketData({ ...props }));
  };

  return (
    <div className={styles.product}>
      <div className={styles.imageWrapper}>
        <img src={props.image} alt="product_image" className={styles.image} />
      </div>
      <div className={styles.innerWrapper}>
        <div className={styles.priceWrapper}>{props.price} ₺</div>
        <div className={styles.plusImageWrapper}>
          <img aria-hidden onClick={addBasket} className={styles.plusImage} src={plus} alt="plus" />
        </div>
        <h3 className={styles.title}>{props.name}</h3>
        <div className={styles.propertyWrapper}>
          <div>{`Kumaş Türü: ${props.clothLabel}`}</div>
          <div>{`Renk Türü: ${props.colorLabel}`}</div>
          <div>{`Kesim: ${props.cutLabel}`}</div>
          <div>{`Beden: ${props.sizeLabel}`}</div>
          <div>{`Cinsiyet: ${props.genderLabel}`}</div>
          <div>{`Yıl: ${props.year}`}</div>
          <div>{`Fiyat: ${props.price} TL`}</div>
        </div>
      </div>
    </div>
  );
};

export interface ProductItemType {
  id: number;
  name: string;
  image: string;
  clothLabel: string;
  colorLabel: string;
  cutLabel: string;
  genderLabel: string;
  sizeLabel: string;
  price: number;
  year: number;
}

export default ProductItem;
