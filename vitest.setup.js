import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock websocket
vi.mock('../services/websocket', () => ({
  connect: vi.fn(),
  disconnect: vi.fn(),
  subscribe: vi.fn()
}));

// Mock wallet context
vi.mock('../contexts/WalletContext', () => ({
  useWallet: () => ({
    connected: false,
    connect: vi.fn(),
    disconnect: vi.fn()
  })
}));