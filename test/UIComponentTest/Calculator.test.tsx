import React from 'react';
import Calculator from '../../src/app/components/Calculator'
import { render, screen, fireEvent, getByLabelText } from '@testing-library/react';

describe('Calculator', () => {
  it('renders Calculator component correctly', () => {
    render(<Calculator />);
    
    // Ensure Calculator title is rendered
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Calculator/i);


    // Ensure Number 1 label and input are rendered
    const num1Label = screen.getByText(/Number 1/i);
    expect(num1Label).toBeInTheDocument();
    const num1Input = screen.getByLabelText(/Number 1/i);
    expect(num1Input).toBeInTheDocument();

    // Ensure Number 2 label and input are rendered
    const num2Label = screen.getByText(/Number 2/i);
    expect(num2Label).toBeInTheDocument();
    const num2Input = screen.getByLabelText(/Number 2/i);
    expect(num2Input).toBeInTheDocument();

    // Ensure Calculate Sum button is rendered

    const calculateButton = screen.getByRole('button');
    expect(calculateButton).toBeInTheDocument();
    expect(calculateButton).toHaveTextContent(/Calculate Sum/i);
  });

  it('should render Number 1 correctly', () => {
    // Check label
    const { getByLabelText, getByTestId } = render(<Calculator/>);
    const label = getByLabelText(/Number 1/i);
    //when dark mode is off (initially)
    expect(label).toHaveClass('text-lg', 'font-semibold', 'text-gray-800');

    // Check input
    const input = getByTestId('num1-input');
    expect(input).toHaveClass('w-full', 'border-b-2', 'border-gray-400', 'focus:border-purple-500', 'px-4', 'py-2', 'focus:outline-none', 'text-lg');
    expect(input).not.toHaveClass('dark:bg-gray-700'); // Dark mode class should not be present
  })
  it('should render Number 2 correctly', () => {
    
  })

  it('should render Calculate Sum Button correctly', () => {
    
  })

  it('toggles dark mode correctly', () => {
    render(<Calculator />);
    
    // Ensure initial dark mode is off
    const calculatorElement = screen.getByRole('main');
    expect(calculatorElement).not.toHaveClass('from-gray-800');
    expect(calculatorElement).not.toHaveClass('via-gray-700');
    expect(calculatorElement).not.toHaveClass('to-gray-600');
    // Click the dark mode toggle button
    const darkModeButton = screen.getByRole('button', { name: /☀️|🌙/ });
    fireEvent.click(darkModeButton);

    // Ensure dark mode is toggled on
    expect(calculatorElement).toHaveClass('from-gray-800');
    expect(calculatorElement).toHaveClass('via-gray-700');
    expect(calculatorElement).toHaveClass('to-gray-600');

    // Click the dark mode toggle button again
    fireEvent.click(darkModeButton);

    // Ensure dark mode is toggled off
    expect(calculatorElement).not.toHaveClass('from-gray-800');
    expect(calculatorElement).not.toHaveClass('via-gray-700');
    expect(calculatorElement).not.toHaveClass('to-gray-600');
  });

  it('calculates sum correctly', () => {
    render(<Calculator />);
    
    // Enter values in Number 1 and Number 2 inputs
    const num1Input = screen.getByLabelText(/Number 1/i) as HTMLInputElement;
    const num2Input = screen.getByLabelText(/Number 2/i) as HTMLInputElement;
    fireEvent.change(num1Input, { target: { value: '10' } });
    fireEvent.change(num2Input, { target: { value: '5' } });

    // Click Calculate Sum button
    const calculateButton = screen.getByText(/Calculate Sum/i);
    fireEvent.click(calculateButton);

    // Ensure result is displayed correctly
    const resultElement = screen.getByText(/Sum: 15/i);
    expect(resultElement).toBeInTheDocument();
  });
});
