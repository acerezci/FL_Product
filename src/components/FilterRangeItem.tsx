import cx from 'classnames';
import React from 'react';
import styles from '../styles/modules/filteritem.module.scss';
import { ItemType } from '../types/responses';

interface Props {
  items: ItemType;
  filtersArray: { min: string; max: string };
}

const FilterRangeItem: React.FC<Props> = ({ items, filtersArray }) => {
  const filterItemWrapper = cx(styles.filterItemWrapper);

  return (
    <div className={filterItemWrapper}>
      {items.label}
      {items.items.map(({ id, label, value }) => (
        <div key={id}>
          <input
            className={styles.input}
            type="number"
            placeholder={label}
            onChange={(e) => {
              const targetValue = e.currentTarget.value;

              if (value === 'min') filtersArray.min = targetValue;
              else filtersArray.max = targetValue;
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FilterRangeItem;
