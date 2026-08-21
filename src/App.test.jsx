import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';

const sendMessage = vi.fn().mockResolvedValue(undefined);

vi.stubGlobal('chrome', {
  tabs: {
    query: vi.fn().mockResolvedValue([{ id: 1 }]),
    sendMessage,
  },
});

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();
    sendMessage.mockClear();
  });

  it('renders the header', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /autofillr/i })).toBeInTheDocument();
  });

  it('generates fields for the default country once its config loads', async () => {
    render(<App />);

    expect(screen.getByLabelText(/country/i)).toHaveValue('se');
    expect(await screen.findByText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/national id/i).value).toMatch(/^\d{10}$/);
  });

  it('sends the generated fields to the active tab', async () => {
    const user = (await import('@testing-library/user-event')).default.setup();
    render(<App />);
    await screen.findByText(/first name/i);

    await user.click(screen.getByRole('button', { name: /fill/i }));

    expect(sendMessage).toHaveBeenCalledWith(
      1,
      expect.objectContaining({ firstName: expect.any(Object) }),
    );
  });
});
