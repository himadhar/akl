import { ClientItemEditProps } from "./ClientItemEditInterfaces";
import "./ClientItemEdit.scss";
import { useState } from "react";

export const ClientItemEditTestId = "client-item-edit-test-id";

const ClientItemEdit = (props: ClientItemEditProps) => {
  const { record, rowIndex, onCancelClickHandler, onSaveClickHandler } = props;
  const [hasError, setHasError] = useState(false);
  const [newBudgetVal, setNewBudgetVal] = useState(record.budget);

  const onSubmitData = (e: any) => {
    e?.preventDefault();
    if (isNaN(newBudgetVal) || newBudgetVal < record.budget_spent) {
      setHasError(true);
    } else {
      const updatedRecord = { ...record };
      updatedRecord.budget = newBudgetVal;
      setHasError(false);
      onSaveClickHandler(rowIndex, updatedRecord);
    }
  };

  return (
    <form
      onSubmit={onSubmitData}
      className="item-edit-container"
      data-testid={ClientItemEditTestId + record?.id}
    >
      <label className="item-edit-element">
        <span className="item-edit-title">Budget</span>
        <input
          type="number"
          defaultValue={record?.budget}
          className={hasError ? "has-error" : ""}
          onChange={(e: any) => {
            const newBudget = Number(e.target.value ?? "");
            setNewBudgetVal(newBudget);
          }}
        />
      </label>
      <label className="item-edit-element">
        <span className="item-edit-title">Company Name</span>
        <span className="item-edit-value">{record?.company_name}</span>
      </label>
      <label className="item-edit-element">
        <span className="item-edit-title">Budget Spent</span>
        <span className="item-edit-value">{record?.budget_spent}</span>
      </label>
      {hasError ? (
        <p className="error-message">
          The budget is invalid. Please enter a valid number not lesser than the
          budget spent!
        </p>
      ) : null}
      <div className="item-edit-btn-container">
        <button className="cancel" onClick={onCancelClickHandler}>
          Cancel
        </button>
        <button className="submit" type="submit" onClick={onSubmitData}>
          Save
        </button>
      </div>
    </form>
  );
};

export default ClientItemEdit;
