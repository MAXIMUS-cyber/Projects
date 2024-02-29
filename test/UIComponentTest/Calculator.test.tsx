import React from 'react';
import Calculator from '../../src/app/components/Calculator'
import { render, screen, fireEvent, getByLabelText, getByText } from '@testing-library/react';

describe('Calculator', () => {
  it('renders Calculator heading correctly', () => {
    render(<Calculator />);
    // Ensure Calculator title is rendered
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Calculator/i);
    expect(heading).toHaveClass('text-4xl', 'font-bold', 'mb-6', 'text-center', 'text-gray-800');
    const darkModeButton = screen.getByRole('button', { name: /☀️|🌙/ });
    fireEvent.click(darkModeButton);
    expect(heading).toHaveClass('text-4xl', 'font-bold', 'mb-6', 'text-center', 'text-white');
    expect(heading).not.toHaveClass('text-gray-800');
  });

  it('should render Number 1 (Label) correctly', () => {
    // Check label
    const { getByText } = render(<Calculator/>);

    // Get the label element by its text content
    const label1 = getByText('Number 1');
    expect(label1).toBeInTheDocument();
    //when dark mode is off (initially)
    expect(label1).toHaveClass('text-lg', 'font-semibold', 'text-gray-800');
    const darkModeButton = screen.getByRole('button', { name: /☀️|🌙/ });
    fireEvent.click(darkModeButton);
    expect(label1).toHaveClass('text-lg', 'font-semibold', 'text-gray-300');
    expect(label1).not.toHaveClass('text-gray-800');
  })
  it('should render Number 1 (Label) correctly', () => {
    // Check label
    const { getByText } = render(<Calculator/>);

    // Get the label element by its text content
    const label1 = getByText('Number 1');
    expect(label1).toBeInTheDocument();
    //when dark mode is off (initially)
    expect(label1).toHaveClass('text-lg', 'font-semibold', 'text-gray-800');
    const darkModeButton = screen.getByRole('button', { name: /☀️|🌙/ });
    fireEvent.click(darkModeButton);
    expect(label1).toHaveClass('text-lg', 'font-semibold', 'text-gray-300');
    expect(label1).not.toHaveClass('text-gray-800');
  })
  it('should render Number 2 (Labe2) correctly', () => {
    // Check label
    const { getByLabelText, getByTestId } = render(<Calculator/>);
    const label2 = getByLabelText(/Number 2/i);
    expect(label2).toBeInTheDocument();
    //when dark mode is off (initially)
    expect(label2).toHaveClass('text-lg', 'font-semibold', 'text-gray-800');
    const darkModeButton = screen.getByRole('button', { name: /☀️|🌙/ });
    fireEvent.click(darkModeButton);
    expect(label2).toHaveClass('text-lg', 'font-semibold', 'text-gray-300');
    expect(label2).not.toHaveClass('text-gray-800');
  })


  it('should render Calculate Sum Button correctly', () => {
    
  })

  it('toggles dark mode for main correctly', () => {
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
