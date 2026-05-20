/**
 * Pricing configuration — standardizes pricing globally to the current model ($99/$149/$299).
 * 
 * Used by homepage, pricing page, and other customer-facing pages.
 */

export function isPriceIncreaseActive() {
  return true;
}

export function getPricing() {
  return {
    core: {
      name: 'Glo Core',
      price: 99,
      display: '$99',
    },
    pro: {
      name: 'Glo Pro',
      price: 149,
      display: '$149',
    },
    unlimited: {
      name: 'Glo Unlimited',
      price: 299,
      display: '$299',
    },
    startingAt: '$99',
    startingAtFull: '$99/month',
    startingAtShort: '$99/mo',
  };
}
