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