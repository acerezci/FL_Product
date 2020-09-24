import React, { useEffect } from 'react';
import FilterItems, { FilterItemsValues } from './FilterItems';
import styles from '../styles/modules/filtermenu.module.scss';

const Filters: React.FC<Props> = ({ setLoading, setProducts, setError }) => {
  const reducer: FilterReducer = (state, action) => {
    if (action.type === 'setFilters') {
      return action.payload;
    }

    const { type, key, value, payload } = action;

    return {
      ...state,
      [type]: {
        ...state[type],
        [key]: {
          ...state[type][key],
          items: {
            ...state[type][key].items,
            [value]: {
              ...state[type][key].items[value],
              inputValue: payload,
            },
          },
        },
      },
    };
  };
  const [filters, dispatch] = React.useReducer<FilterReducer>(reducer, {});

  useEffect(() => {
    fetch('http://localhost:8080/filters')
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: 'setFilters', payload: response.filters } as any);
      });
  }, []);

  if (!filters) {
    return null;
  }

  const handleChange = (type: string, key: string, value: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    let payload;

    switch (type) {
      case 'status':
        payload = event.currentTarget.checked ? true : undefined;
        break;
      case 'range':
        payload = event.target.value ? Number(event.target.value) : undefined;
        break;
      default:
        break;
    }

    dispatch({
      type,
      key,
      value,
      payload,
    });
  };

  const handleSearch = () => {
    setLoading(true);
    const query = Object.entries(filters).reduce<{ [key: string]: string[] }>((prev, [filterKey, type]) => {
      Object.entries(type).forEach(([key, value]) => {
        const items = filterValues(filterKey, Object.values(value.items as any));
        if (items) {
          prev[filterKey] = {
            ...prev[filterKey],
            [key]: items,
          };
        }
      });

      return prev;
    }, {});

    fetch('http://localhost:8080/filter', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query),
    })
      .then((response) => response.json())
      .then(setProducts)
      .catch(() => setError(true))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  };

  const filterValues = (type: string, values: { value: string; inputValue: string }[]) => {
    let items;

    if (type === 'range') {
      items = values.map((v) => v.inputValue);
    } else {
      items = values.reduce<string[]>((prev, current) => {
        if (current.inputValue) {
          prev.push(current.value);
        }

        return prev;
      }, []);
    }

    return items.length > 0 && (items[0] || items[1]) ? items : undefined;
  };

  return (
    <div>
      {Object.entries(filters).map(([type, values]) => (
        <FilterItems key={type} type={type} values={values} handleChange={handleChange} />
      ))}

      <button className={styles.button} type="button" onClick={handleSearch}>
        Ara
      </button>
    </div>
  );
};

interface Props {
  setProducts: (data: any) => void;
  setLoading: (status: boolean) => void;
  setError: (status: boolean) => void;
}

type FilterReducer = React.Reducer<FiltersState, FilterReducerAction>;
type FiltersState = { [type: string]: FilterItemsValues };
type FilterReducerAction = {
  type: string;
  key: string;
  value: string;
  payload: any;
};

export default Filters;
