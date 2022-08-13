
import { Artist,Genre } from "../../../types/types";

export const addItem=(itemList: object[], newItem: object): object[] => {

    itemList.push(newItem);

    return itemList;
    
}

export const removeItem = (itemList: Artist[] | Genre[],removed: Artist | Genre
): Artist[] | Genre[] => {
  const items: Artist[] | Genre[] = itemList.filter(
    (el) => el.id !== removed.id
  );
    
    return items;
};
    