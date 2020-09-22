import cx from 'classnames';
import React from 'react';
import styles from '../styles/modules/filtermenu.module.scss';
import FilterItem from './FilterItem';

const filterObject = [
  {
    gender: [
      { key: 'male', value: 'Erkek' },
      { key: 'female', value: 'Kadın' },
    ],
    cut: [
      { key: 'slim', value: 'Dar Kesim' },
      { key: 'loose', value: 'Bol Kesim' },
    ],
    color: [
      { key: 'red', value: 'Kırmızı' },
      { key: 'blue', value: 'Mavi' },
      { key: 'gray', value: 'Gri' },
      { key: 'black', value: 'Siyah' },
    ],
    size: [
      { key: 's', value: 'S' },
      { key: 'm', value: 'M' },
      { key: 'l', value: 'L' },
      { key: 'xl', value: 'XL' },
      { key: 'xxl', value: 'XXL' },
    ],
    cloth: [
      { key: 'cotton', value: 'Pamuk' },
      { key: 'linen', value: 'Keten' },
      { key: 'leather', value: 'Deri' },
    ],
    price: [
      { key: 'low', value: 'En Düşük Fiyat' },
      { key: 'high', value: 'En Yüksek Fiyat' },
    ],
  },
];

const FilterMenu: React.FC = () => {
  const filterWrapper = cx('container', styles.filterMenuWrapper);

  return (
    <div className={styles.filterMenuContainer}>
      {filterObject.map((object, index) => (
        <div className={filterWrapper} key={index.toString()}>
          <FilterItem title="Cinsiyet" item={object.gender} />
          <FilterItem title="Kesim" item={object.cut} />
          <FilterItem title="Renk" item={object.color} />
          <FilterItem title="Beden" item={object.size} />
          <FilterItem title="Kumaş" item={object.cloth} />
          <FilterItem title="Fiyat" inputType="number" item={object.price} />
        </div>
      ))}
    </div>
  );
};

export default FilterMenu;
