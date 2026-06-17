import { Page } from '@playwright/test';

/**
 * Utility helpers used across the test suite
 */

// ─── String Helpers ───────────────────────────────────────────────────────────

/**
 * Parse a price string like "₹1,23,456" → 123456
 */
export function parsePrice(priceString: string): number {
  return parseInt(priceString.replace(/[^0-9]/g, ''), 10);
}

/**
 * Format a number as INR currency string
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Truncate text to a max length
 */
export function truncate(text: string, maxLen = 50): string {
  return text.length > maxLen ? text.slice(0, maxLen) + '...' : text;
}

/**
 * Generate a random string (useful for unique test data)
 */
export function randomString(length = 8): string {
  return Math.random().toString(36).substring(2, 2 + length);
}

/**
 * Generate a random Indian phone number
 */
export function randomPhone(): string {
  const prefix = ['6', '7', '8', '9'][Math.floor(Math.random() * 4)];
  const rest = Math.floor(Math.random() * 1_000_000_000)
    .toString()
    .padStart(9, '0');
  return prefix + rest;
}

// ─── Wait Helpers ─────────────────────────────────────────────────────────────

export async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function retryAction<T>(
  action: () => Promise<T>,
  maxAttempts = 3,
  delayMs = 1000,
): Promise<T> {
  let lastError: Error | undefined;
  for (let i = 0; i < maxAttempts; i++) {
    try {
      return await action();
    } catch (err) {
      lastError = err as Error;
      if (i < maxAttempts - 1) await sleep(delayMs);
    }
  }
  throw lastError;
}

// ─── Network Helpers ──────────────────────────────────────────────────────────

/**
 * Wait for a specific API response matching a URL pattern
 */
export async function waitForApiResponse(
  page: Page,
  urlPattern: string | RegExp,
  timeout = 10000,
): Promise<unknown> {
  const response = await page.waitForResponse(
    res => {
      const url = res.url();
      return typeof urlPattern === 'string'
        ? url.includes(urlPattern)
        : urlPattern.test(url);
    },
    { timeout },
  );
  return response.json();
}

/**
 * Intercept and mock an API endpoint
 */
export async function mockApiEndpoint(
  page: Page,
  urlPattern: string | RegExp,
  mockResponse: object,
  statusCode = 200,
): Promise<void> {
  await page.route(urlPattern, route =>
    route.fulfill({
      status: statusCode,
      contentType: 'application/json',
      body: JSON.stringify(mockResponse),
    }),
  );
}

/**
 * Block analytics / tracking requests to speed up tests
 */
export async function blockTrackers(page: Page): Promise<void> {
  const blocklist = [
    '**/analytics/**',
    '**/tracking/**',
    '**/gtm.js',
    '**/hotjar**',
    '**/fbevents**',
    '**/clarity**',
  ];
  for (const pattern of blocklist) {
    await page.route(pattern, route => route.abort());
  }
}

// ─── Date Helpers ─────────────────────────────────────────────────────────────

export function getFormattedDate(date = new Date()): string {
  return date.toISOString().split('T')[0]; // YYYY-MM-DD
}

export function getTimestamp(): string {
  return new Date().toISOString().replace(/[:.-]/g, '_');
}

// ─── Array Helpers ────────────────────────────────────────────────────────────

export function isSortedAscending(arr: number[]): boolean {
  return arr.every((val, i) => i === 0 || arr[i - 1] <= val);
}

export function isSortedDescending(arr: number[]): boolean {
  return arr.every((val, i) => i === 0 || arr[i - 1] >= val);
}

export function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}