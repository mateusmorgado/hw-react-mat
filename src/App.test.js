import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';

test('Learn React-Link', () => {
  render(<App />);

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Button test', () => {
  render(<App />);

  const buttonElement = screen.getByTestId("change-color-button");
  expect(buttonElement).toBeInTheDocument();
});

test('Prüft, dass der Knopf seine Farbe nach einem Klick ändert', () => {
  render(<App />);

  const buttonElement = screen.getByTestId("change-color-button");
  expect(buttonElement).toHaveClass('btn-success');

  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveClass('btn-danger');
});

test("Slider lässt sich erhöhen und der Wert ändert sich", () => {
  render(<App />);

  const slider = screen.getByTestId("range-slider");
  expect(slider.value).toBe("50");

  fireEvent.change(slider, { target: { value: "77" } });
  expect(slider.value).toBe("77");

  const displayedValue = screen.getByText("Selected Value: 77");
  expect(displayedValue).toBeInTheDocument();
});

test("Slider lässt sich verringern und der Wert ändert sich", () => {
  render(<App />);

  const slider = screen.getByTestId("range-slider");
  expect(slider.value).toBe("50");

  fireEvent.change(slider, { target: { value: "23" } });
  expect(slider.value).toBe("23");

  const displayedValue = screen.getByText("Selected Value: 23");
  expect(displayedValue).toBeInTheDocument();
});

test("Dropdown wird richtig angezeigt", async () => {
  render(<App />);

  const dropdownToggle = screen.getByText("Dropdown");
  await act(async () => {
    fireEvent.click(dropdownToggle);
  });

  const itemOne = screen.getByText("One");
  const itemTwo = screen.getByText("Two");
  const itemThree = screen.getByText("Three");

  expect(itemOne).toBeInTheDocument();
  expect(itemTwo).toBeInTheDocument();
  expect(itemThree).toBeInTheDocument();

  expect(dropdownToggle).toHaveAttribute("aria-expanded", "true");
});
