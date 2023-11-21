interface IItem {
  name: string;
  price: number;
}

class Item implements IItem {
  public name: string;
  public price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

export const setPrice = (item: Item, price: number): object => {
  const newItem: IItem = new Item(item.name, price);
  return newItem;
};

export const addToCart = (cart: string[], item: IItem): IItem[] => {
  const newArray: IItem[] = [];

  newArray.push(item);

  return newArray as IItem[];
};
