import { ClientListProps } from "./ClientsInterfaces";
import "./ClientList.scss";
import { useEffect, useState } from "react";
import { ClientListItem } from "../../Apis/ClientList/ClientListInterfaces";
import { getClientList } from "../../Apis/ClientList/ClientListApi";
import ClientItem from "../ClientItem/ClientItem";
import Popup from "../../Components/Popup/Popup";
import ClientItemEdit from "../ClientItemEdit/ClientItemEdit";

export const ClientListTestId = "clientlist-data-testid";

const ClientList = (props: ClientListProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [clientListData, setClientListData] = useState<ClientListItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    onInit();
    // eslint-disable-next-line
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

  const onEditClickHandler = (index: number) => {
    setSelectedIndex(index);
  };

  const onEditCancelClickHandler = () => {
    setSelectedIndex(-1);
  };

  const onEditSaveClickHandler = (index: number, record: ClientListItem) => {
    const temp = [...clientListData];
    temp[index] = record;
    setClientListData([...temp]);
    onEditCancelClickHandler();
  };

  return (
    <div className="clientlist-container" data-testid={ClientListTestId}>
      {errorMsg ? <div className="error-message">errorMsg</div> : null}
      {isLoading ? "Please wait while we fetch data..." : null}
      {!isLoading && !!clientListData ? (
        <>
          <h3>Client list</h3>
          <h6>Please click on edit for changing the budget</h6>
          <ClientItem isDummy={true} rowIndex={-1} />
          {clientListData.map((record, index) => {
            return (
              <ClientItem
                key={`${record.id + record.company_name}`}
                record={record}
                rowIndex={index}
                onEditClickHandler={onEditClickHandler}
              />
            );
          })}
        </>
      ) : null}
      {selectedIndex > -1 ? (
        <Popup title="Edit item">
          <ClientItemEdit
            onCancelClickHandler={onEditCancelClickHandler}
            onSaveClickHandler={onEditSaveClickHandler}
            record={clientListData[selectedIndex]}
            rowIndex={selectedIndex}
          />
        </Popup>
      ) : null}
    </div>
  );
};

export default ClientList;
