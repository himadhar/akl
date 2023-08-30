import { ClientListItem } from "../../Apis/ClientList/ClientListInterfaces";

export type ClientItemProps = {
  record?: ClientListItem;
  rowIndex: number;
  isDummy?: boolean;
  onEditClickHandler?: (index: number) => void;
};
