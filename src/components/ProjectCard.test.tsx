import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';
import ProjectCard from './ProjectCard';

const baseProps = {
    name: 'NeighborhoodWatchIntelligenceService',
    description: 'A high-availability API for street-level crime analytics.',
    html_url: 'https://github.com/simms11/NeighborhoodWatchIntelligenceService',
    language: 'TypeScript',
};

const demoUrl = 'https://neighborhood-watch-intelligence-ser.vercel.app';

test('renders project details and no demo button when demoUrl is absent', () => {
    render(<ProjectCard {...baseProps} />);

    expect(screen.getByText(baseProps.name)).toBeInTheDocument();
    expect(screen.getByText(baseProps.description)).toBeInTheDocument();
    expect(screen.getByText(/TypeScript/i)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /live demo/i })).not.toBeInTheDocument();
});

test('shows a Live Demo button when demoUrl is provided', () => {
    render(<ProjectCard {...baseProps} demoUrl={demoUrl} />);

    expect(screen.getByRole('button', { name: /live demo/i })).toBeInTheDocument();
});

test('opens a dialog with an iframe pointing at demoUrl', () => {
    render(<ProjectCard {...baseProps} demoUrl={demoUrl} />);

    fireEvent.click(screen.getByRole('button', { name: /live demo/i }));

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByTitle(`${baseProps.name} live demo`)).toHaveAttribute('src', demoUrl);
});

test('closes on close-button click and returns focus to the trigger', () => {
    render(<ProjectCard {...baseProps} demoUrl={demoUrl} />);

    const trigger = screen.getByRole('button', { name: /live demo/i });
    fireEvent.click(trigger);
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /close demo/i }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
});

test('closes on Escape key press', () => {
    render(<ProjectCard {...baseProps} demoUrl={demoUrl} />);

    fireEvent.click(screen.getByRole('button', { name: /live demo/i }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('closes on backdrop click but not on clicks inside the dialog content', () => {
    render(<ProjectCard {...baseProps} demoUrl={demoUrl} />);

    fireEvent.click(screen.getByRole('button', { name: /live demo/i }));
    const dialog = screen.getByRole('dialog');

    fireEvent.click(screen.getByTitle(`${baseProps.name} live demo`));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.click(dialog);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('locks body scroll while open and restores it on close', () => {
    render(<ProjectCard {...baseProps} demoUrl={demoUrl} />);

    expect(document.body.style.overflow).toBe('');

    fireEvent.click(screen.getByRole('button', { name: /live demo/i }));
    expect(document.body.style.overflow).toBe('hidden');

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(document.body.style.overflow).toBe('');
});

test('hides the loading indicator once the iframe fires its load event', () => {
    render(<ProjectCard {...baseProps} demoUrl={demoUrl} />);

    fireEvent.click(screen.getByRole('button', { name: /live demo/i }));
    expect(screen.getByText(/spinning up the live demo/i)).toBeInTheDocument();

    fireEvent.load(screen.getByTitle(`${baseProps.name} live demo`));
    expect(screen.queryByText(/spinning up the live demo/i)).not.toBeInTheDocument();
});
