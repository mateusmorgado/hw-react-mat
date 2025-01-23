import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('button test', () => {
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