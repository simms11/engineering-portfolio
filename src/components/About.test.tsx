import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import About from './About';

test('renders the mission statement correctly', () => {
    render(<About />);

    const heading = screen.getByText(/Allow me to introduce myself/i);
    expect(heading).toBeInTheDocument();

    expect(heading).toHaveClass('text-blue-600');
});