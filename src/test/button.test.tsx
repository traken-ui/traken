import { render } from "@testing-library/react";
import React from "react";
import Button from "../components/button/Button";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("should render the button", () => {
    // Arrange
    const { getByText } = render(<Button variant="solid">Click me</Button>)

    // Act
    const button = getByText("Click me")
    
    // Assert
    expect(button).toBeInTheDocument()

  })
})