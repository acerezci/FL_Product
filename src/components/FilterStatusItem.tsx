import cx from 'classnames';
import React from 'react';
import styles from '../styles/modules/filteritem.module.scss';
import { ItemType } from '../types/responses';

interface Props {
  items: ItemType;
  filtersArray: string[];
}

const FilterStatusItem: React.FC<Props> = ({ items, filtersArray }) => {
  const filterItemWrapper = cx(styles.filterItemWrapper);

  return (
    <div className={filterItemWrapper}>
      {items.label}
      {items.items.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            value={item.value}
            onChange={(e) => {
              if (e.currentTarget.checked) filtersArray.push(item.value);
              else {
                const index = filtersArray.indexOf(item.value);
                if (index !== -1) {
                  filtersArray.splice(index, 1);
                }
              }
            }}
          />
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default FilterStatusItem;
