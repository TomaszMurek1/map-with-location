import { createContext } from "react";

export type ISearchItem = {
  id: number;
  value: string;
};

export type ISearchListContext = {
  searchList: ISearchItem[];
  setSearchList: (value: ISearchItem[]) => void;
};

export const SearchListContext = createContext<ISearchListContext>({
  searchList: [],
  setSearchList: () => [],
});
