import { cleanup, render, screen } from "@testing-library/react";
import ClientItem, { ClientItemTestId } from "./ClientItem";

describe("ClientItem", () => {
  const data = {
    id: 1245,
    company_name: "Tesla",
    budget: 125000.0,
    budget_spent: 62000.0,
    date_of_contract_sign: "2021-01-04",
  };
  render(<ClientItem record={data} rowIndex={1} />);

  afterEach(cleanup);

  it("should return true if the widget was rendered correctly", () => {
    const result = screen.getAllByTestId(ClientItemTestId);
    expect(result).toHaveLength(1);
  });
});
