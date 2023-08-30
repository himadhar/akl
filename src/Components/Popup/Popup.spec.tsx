import { cleanup, render, screen } from "@testing-library/react";
import Popup, { PopupTestId } from "./Popup";

describe("PopupTestId", () => {
  render(<Popup title="Test" children={[]} />);

  afterEach(cleanup);

  it("should return true if the widget was rendered correctly", () => {
    const result = screen.getAllByTestId(PopupTestId);
    expect(result).toHaveLength(1);
  });
});
