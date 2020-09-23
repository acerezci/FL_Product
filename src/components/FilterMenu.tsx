import cx from 'classnames';
import React, { useEffect, useState } from 'react';
import styles from '../styles/modules/filtermenu.module.scss';
import { FilterMenuResponseType } from '../types/responses';
import FilterStatusItem from './FilterStatusItem';
import FilterRangeItem from './FilterRangeItem';

const onSubmit = (filtersArray: any) => {
  fetch('http://localhost:8080/filterdata', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(filtersArray),
  })
    .then((response) => response.json())
    .then((response) => console.log(response));
};

const FilterMenu: React.FC = () => {
  const filterWrapper = cx('container', styles.filterMenuWrapper);
  const [filterMenu, setFilterMenu] = useState<FilterMenuResponseType>();
  const filtersArray = {
    cloth: [],
    colors: [],
    cut: [],
    sizes: [],
    gender: [],
    price: { min: '', max: '' },
  };

  useEffect(() => {
    fetch('http://localhost:8080/allfilters')
      .then((response) => response.json())
      .then((response) => setFilterMenu(response.filters));
  }, []);

  return (
    <div className={styles.filterMenuContainer}>
      <div className={filterWrapper}>
        {filterMenu?.status.cloth && (
          <FilterStatusItem
            filtersArray={filtersArray.cloth}
            items={filterMenu.status.cloth}
          />
        )}
        {filterMenu?.status.colors && (
          <FilterStatusItem
            filtersArray={filtersArray.colors}
            items={filterMenu.status.colors}
          />
        )}
        {filterMenu?.status.gender && (
          <FilterStatusItem
            filtersArray={filtersArray.gender}
            items={filterMenu.status.gender}
          />
        )}
        {filterMenu?.status.cut && (
          <FilterStatusItem
            filtersArray={filtersArray.cut}
            items={filterMenu.status.cut}
          />
        )}
        {filterMenu?.status.sizes && (
          <FilterStatusItem
            filtersArray={filtersArray.sizes}
            items={filterMenu.status.sizes}
          />
        )}
        {filterMenu?.range.price && (
          <FilterRangeItem
            items={filterMenu.range.price}
            filtersArray={filtersArray.price}
          />
        )}
      </div>

      <button type="button" onClick={() => onSubmit(filtersArray)}>
        Ara
      </button>
    </div>
  );
};

export default FilterMenu;
