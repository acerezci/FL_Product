import cx from 'classnames';
import React from 'react';
import styles from '../styles/modules/filteritem.module.scss';

type arrayType = {
  value: string;
  key: string;
};

type inputTypeCheck = 'checkbox' | 'number';

interface Props {
  title: string;
  item: arrayType[];
  inputType?: inputTypeCheck;
  placeholder?: string;
}

const FilterItem: React.FC<Props> = ({
  title,
  item,
  inputType = 'checkbox',
}) => {
  const filterItemWrapper = cx(styles.filterItemWrapper);

  return (
    <div className={filterItemWrapper}>
      {title || null}
      {item
        && item.map((data) => (
          <div>
            <input
              type={inputType}
              placeholder={inputType === 'number' ? data.value : ''}
            />
            {inputType === 'checkbox' && data.value}
          </div>
        ))}
    </div>
  );
};

export default FilterItem;
