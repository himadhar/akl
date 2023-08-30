import { cleanup, render, screen } from "@testing-library/react";
import ClientList, { ClientListTestId } from "./ClientList";

describe("ClientList", () => {
  render(<ClientList />);

  afterEach(cleanup);

  it("should return true if the widget was rendered correctly", async () => {
    const result = await screen.getAllByTestId(ClientListTestId);
    expect(result).toHaveLength(1);
  });
});
