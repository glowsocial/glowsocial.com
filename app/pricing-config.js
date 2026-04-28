/**
 * Pricing configuration — auto-switches on May 1, 2026
 * 
 * Before May 1: shows legacy prices ($49/$99/$199)
 * After May 1: shows new prices ($99/$149/$299)
 * 
 * Used by homepage, pricing page, and other customer-facing pages.
 */

const PRICE_INCREASE_DATE = new Date('2026-05-01T00:00:00-07:00'); // Midnight MDT

export function isPriceIncreaseActive() {
  return new Date() >= PRICE_INCREASE_DATE;
}

export function getPricing() {
  const active = isPriceIncreaseActive();
  return {
    core: {
      name: 'Glo Core',
      price: active ? 99 : 49,
      display: active ? '$99' : '$49',
    },
    pro: {
      name: 'Glo Pro',
      price: active ? 149 : 99,
      display: active ? '$149' : '$99',
    },
    unlimited: {
      name: 'Glo Unlimited',
      price: active ? 299 : 199,
      display: active ? '$299' : '$199',
    },
    startingAt: active ? '$99' : '$49',
    startingAtFull: active ? '$99/month' : '$49/month',
    startingAtShort: active ? '$99/mo' : '$49/mo',
  };
}
