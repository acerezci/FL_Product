import cx from 'classnames';
import React from 'react';
import styles from '../styles/modules/filteritem.module.scss';

const FilterItem: React.FC<Props> = ({ value, type, onChange }) => {
  const inputStyle = cx(type === 'range' && styles.input);
  let inputType: string;

  switch (type) {
    case 'status':
      inputType = 'checkbox';
      break;
    default:
      inputType = 'text';
      break;
  }

  return (
    <div className={styles.filterItemWrapper}>
      <h6>{value.label}</h6>
      {Object.entries(value.items).map(([valueKey, item]) => (
        <div className={styles.innerWrapper} key={type + valueKey}>
          <input
            className={inputStyle}
            type={inputType}
            onChange={onChange(valueKey)}
            placeholder={item.label}
            value={item.inputValue || ''}
          />
          {type !== 'range' && <div>{item.label}</div>}
        </div>
      ))}
    </div>
  );
};

interface Props {
  value: FilterItemValue;
  type: string;
  onChange: (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FilterItemValue {
  label: string;
  items: {
    [key: string]: {
      label: string;
      inputValue: string;
    };
  };
}

export default FilterItem;
