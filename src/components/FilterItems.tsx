import cx from 'classnames';
import React from 'react';
import FilterItem, { FilterItemValue } from './FilterItem';
import styles from '../styles/modules/filtermenu.module.scss';

const FilterItems: React.FC<Props> = ({ type, values, handleChange }) => {
  const filterWrapper = cx('container', styles.filterMenuWrapper);
  const onFilterChange = (key: string) => (valueKey: string) => handleChange(type, key, valueKey);

  return (
    <div className={filterWrapper}>
      {Object.entries(values).map(([key, value]) => (
        <FilterItem key={key} value={value} type={type} onChange={onFilterChange(key)} />
      ))}
    </div>
  );
};

interface Props {
  type: string;
  values: FilterItemsValues;
  handleChange: (type: string, key: string, valueKey: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export type FilterItemsValues = {
  [key: string]: FilterItemValue;
};

export default FilterItems;
