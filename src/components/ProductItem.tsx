import cx from 'classnames';
import React from 'react';
import styles from '../styles/modules/products.module.scss';

interface Prop {
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

const ProductItem: React.FC<Prop> = (props) => {
  const productWrapper = cx(styles.product);
  const title = cx('offMargin', styles.title);
  const propertyWrapper = cx('offMargin', styles.propertyWrapper);

  return (
    <div className={productWrapper}>
      <img src={props.image} alt="product_image" className={styles.image} />
      <div className={title}>{props.name}</div>
      <div className={propertyWrapper}>
        <div className={styles.propertyItem}>{`Kumaş Türü: ${props.clothLabel}`}</div>
        <div>{`Renk Türü: ${props.colorLabel}`}</div>
        <div>{`Kesim: ${props.cutLabel}`}</div>
        <div>{`Beden: ${props.sizeLabel}`}</div>
        <div>{`Cinsiyet: ${props.genderLabel}`}</div>
        <div>{`Yıl: ${props.year}`}</div>
        <div>{`Fiyat: ${props.price} TL`}</div>
      </div>
    </div>
  );
};

export default ProductItem;
