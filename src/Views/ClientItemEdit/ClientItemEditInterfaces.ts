import { ClientListItem } from "../../Apis/ClientList/ClientListInterfaces";

export type ClientItemEditProps = {
  record: ClientListItem;
  rowIndex: number;
  onSaveClickHandler: (index: number, record: ClientListItem) => void;
  onCancelClickHandler: () => void;
};
