import cx from 'classnames';
import React from 'react';
import styles from '../styles/modules/filteritem.module.scss';
import { FilterItemType } from '../types/responses';

interface Props {
  items: FilterItemType;
  filterArray: string[];
}

const FilterRangeItem: React.FC<Props> = ({ items, filterArray }) => {
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
              if (value === 'min') filterArray[0] = targetValue;
              else filterArray[1] = targetValue;
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FilterRangeItem;
