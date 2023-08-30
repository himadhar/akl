import { ClientItemProps } from "./ClientItemInterfaces";
import "./ClientItem.scss";

export const ClientItemTestId = "client-item-test-id";

const ClientItem = (props: ClientItemProps) => {
  const { record, rowIndex, isDummy = false, onEditClickHandler } = props;

  return (
    <div
      className={"item-container" + (isDummy ? " is-title-container" : "")}
      data-testid={ClientItemTestId + (record?.id ?? "")}
    >
      <label className="item-element">
        {isDummy && <span className="item-title">Budget</span>}
        {!isDummy && <span className="item-value">{record?.budget}</span>}
      </label>
      <label className="item-element">
        {isDummy && <span className="item-title">Company Name</span>}
        {!isDummy && <span className="item-value">{record?.company_name}</span>}
      </label>
      <label className="item-element">
        {isDummy && <span className="item-title">Budget Spent</span>}
        {!isDummy && <span className="item-value">{record?.budget_spent}</span>}
      </label>
      {!isDummy && (
        <button
          className=" item-element"
          onClick={() => {
            onEditClickHandler && onEditClickHandler(rowIndex);
          }}
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default ClientItem;
