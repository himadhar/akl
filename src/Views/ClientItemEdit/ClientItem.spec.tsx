import { cleanup, render, screen } from "@testing-library/react";
import ClientItem, { ClientItemEditTestId } from "./ClientItemEdit";
import ClientItemEdit from "./ClientItemEdit";

describe("ClientItem", () => {
  const record = {
    id: 1245,
    company_name: "Tesla",
    budget: 125000.0,
    budget_spent: 62000.0,
    date_of_contract_sign: "2021-01-04",
  };
  render(
    <ClientItemEdit
      record={record}
      rowIndex={1}
      onCancelClickHandler={jest.fn()}
      onSaveClickHandler={jest.fn()}
    />
  );

  afterEach(cleanup);

  it("should return true if the widget was rendered correctly", () => {
    const result = screen.getAllByTestId(ClientItemEditTestId + record?.id);
    expect(result).toHaveLength(1);
  });
});
