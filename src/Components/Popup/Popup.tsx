import { ReactNode } from "react";
import "./Popup.scss";

export type PopupProps = {
  title: string;
  children: ReactNode;
};

export const PopupTestId = "popup-test-id";

const Popup = (props: PopupProps) => {
  return (
    <div className="popup-container" data-testid={PopupTestId}>
      <div className="popup-content">
        <h6>{props.title}</h6>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Popup;
