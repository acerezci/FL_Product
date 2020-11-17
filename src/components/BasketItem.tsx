import React from "react";
import { ProductItemType } from "./ProductItem";
import styles from "../styles/modules/basket.module.scss";
import cancel from "../assets/cancel.svg";
import { useAppDispatch } from "../store";
import { BasketActions } from "../store/basket/reducers";

const BasketItem: React.FC<ProductItemType> = (props) => {
  console.log(props);
  const dispatch = useAppDispatch();
  const removeItem = () => {
    const { id } = props;
    dispatch(BasketActions.removeBasketData(id));
  };

  return (
    <div className={styles.basketItemWrapper}>
      <img className={styles.image} src={props.image} alt="product_image" />
      <div>
        <img
          aria-hidden
          onClick={removeItem}
          className={styles.cancelImage}
          src={cancel}
          alt="cancel"
        />
        <div>{`Kumaş Türü: ${props.name}`}</div>
        <div>{`Kumaş Türü: ${props.clothLabel}`}</div>
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

export default BasketItem;
