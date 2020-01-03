import React from "react";

import ReactDOM from "react-dom";

import Realtor from "./Realtor";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Realtor />);

  ReactDOM.unmountComponentAtNode(div);
});
