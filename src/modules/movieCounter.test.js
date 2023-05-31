/**
 * @jest-environment jsdom
 */

import movieCounter from './movieCounter.js';

describe('Items counter function', () => {
  test('Elements count is = 0', () => {
    document.body.innerHTML = `
        <div>
            
        </div>
        `;
    const items = document.querySelectorAll('.items');
    expect(movieCounter(items)).toBe(0);
  });
});

describe('Items counter function', () => {
  test('Elements count is = 8', () => {
    document.body.innerHTML = `
        <div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
            <div class="items"></div>
        </div>
        `;
    const items = document.querySelectorAll('.items');
    expect(movieCounter(items)).toBe(8);
  });
});
