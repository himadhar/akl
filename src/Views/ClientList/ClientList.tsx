import { ClientListProps } from "./ClientsInterfaces";
import "./ClientList.scss";
import { useEffect, useState } from "react";
import { ClientListItem } from "../../Apis/ClientList/ClientListInterfaces";
import { getClientList } from "../../Apis/ClientList/ClientListApi";

export const ClientListTestId = "clientlist-data-testid";

const ClientList = (props: ClientListProps) => {
  const [clientListData, setClientListData] = useState<ClientListItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    onInit();
  }, []);

  const onInit = async () => {
    setIsLoading(true);
    getClientList(onSuccessHandler, onErrorHandler);
  };

  const onSuccessHandler = (data: ClientListItem[]) => {
    setClientListData(data);
    setIsLoading(false);
  };

  const onErrorHandler = (e: any) => {
    setErrorMsg("Something went wrong");
    setIsLoading(false);
  };

  return (
    <div className="clientlist-container" data-testid={ClientListTestId}>
      {errorMsg ? <div className="error-message">errorMsg</div> : null}
      {isLoading ? "Please wait while we fetch data..." : null}
      {!isLoading && !!clientListData ? (
        <div>{clientListData.length}</div>
      ) : null}
    </div>
  );
};

export default ClientList;
