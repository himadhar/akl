//

import { ClientListItem } from "./ClientListInterfaces";
const url = "https://64ef5f1d219b3e2873c46543.mockapi.io/api/clientlist";

export const getClientList = async (
  successHandler: Function,
  errorHandler: Function
) => {
  fetch(url)
    .then((response) => response.json())
    .then((data: ClientListItem[]) => {
      successHandler(data);
    })
    .catch((e) => {
      errorHandler(e);
    });
};
