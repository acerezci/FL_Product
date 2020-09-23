import cx from 'classnames';
import React from 'react';
import styles from '../styles/modules/filteritem.module.scss';
import { FilterItemType } from '../types/responses';

interface Props {
  items: FilterItemType;
  filterArray: string[];
}

const FilterStatusItem: React.FC<Props> = ({ items, filterArray }) => {
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
              if (e.currentTarget.checked) filterArray.push(item.value);
              else {
                const index = filterArray.indexOf(item.value);
                if (index !== -1) {
                  filterArray.splice(index, 1);
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
