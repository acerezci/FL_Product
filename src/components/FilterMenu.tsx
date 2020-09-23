import cx from 'classnames';
import React, { useEffect, useState } from 'react';
import styles from '../styles/modules/filtermenu.module.scss';
import { FilterMenuResponseType, FilterMenuItemType } from '../types/responses';
import { FilterObjectType } from '../types/common';
import FilterStatusItem from './FilterStatusItem';
import FilterRangeItem from './FilterRangeItem';

const onSubmit = (filtersObject: any) => {
  fetch('http://localhost:8080/filterdata', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(filtersObject),
  })
    .then((response) => response.json())
    .then((response) => console.log(response));
};

const FilterMenu: React.FC = () => {
  const filterWrapper = cx('container', styles.filterMenuWrapper);
  const [filterMenu, setFilterMenu] = useState<FilterMenuResponseType>();
  const filtersObject: FilterObjectType = {
    range: {},
    status: {},
  };

  useEffect(() => {
    fetch('http://localhost:8080/allfilters')
      .then((response) => response.json())
      .then((response) => setFilterMenu(response.filters));
  }, []);

  return (
    <div className={filterWrapper}>
      {filterMenu
          && Object.keys(filterMenu).map((filterMenuKey) => {
            const filterSubMenu = filterMenu[filterMenuKey as keyof FilterMenuResponseType];

            return Object.keys(filterSubMenu).map((subMenuKey) => {
              filtersObject[filterMenuKey as keyof FilterMenuResponseType][subMenuKey] = [];
              const filterArray = filtersObject[filterMenuKey as keyof FilterMenuResponseType][subMenuKey];
              const items = filterSubMenu[subMenuKey as keyof FilterMenuItemType];

              if (filterMenuKey === 'range') {
                return (
                  <FilterRangeItem
                    key={subMenuKey}
                    filterArray={filterArray}
                    items={items}
                  />
                );
              }

              return (
                <FilterStatusItem
                  key={subMenuKey}
                  filterArray={filterArray}
                  items={items}
                />
              );
            });
          })}
      <button className={styles.button} type="button" onClick={() => onSubmit(filtersObject)}>
        Ara
      </button>
    </div>

  );
};

export default FilterMenu;
