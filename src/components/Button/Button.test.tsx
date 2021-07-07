/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen } from "@testing-library/react";

import { Button } from ".";

describe(Button.name, () => {
  it("render the container", () => {
    render(<Button>button</Button>);

    const target = screen.getByTestId("button");
    expect(target).toHaveTextContent("button");
  });
});
