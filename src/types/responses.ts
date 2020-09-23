type ItemDataType = {
  id: number;
  label: string;
  value: string;
};

export type ItemType = {
  label: string;
  items: Array<ItemDataType>;
};

export type FilterMenuStatusItemType = {
  cloth: ItemType;
  colors: ItemType;
  cut: ItemType;
  gender: ItemType;
  sizes: ItemType;
};

type FilterMenuRangeItemType = {
  price: ItemType;
};

export interface FilterMenuResponseType {
  range: FilterMenuRangeItemType;
  status: FilterMenuStatusItemType;
}

export interface ProductsResponse {}
