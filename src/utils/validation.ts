/**
 * Shared field validation for form server actions.
 *
 * The purpose of these checks is abuse prevention, not full RFC 5322 email
 * grammar: they bound payload sizes (Firestore documents and the mail trigger
 * extension both choke on multi-megabyte submissions) and filter obvious
 * garbage early, before a Firestore write or email is triggered.
 */

/** Rough but pragmatic email check: local@domain.tld */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const FIELD_LIMITS = {
  /** Names, first names, streets, cities, zip codes */
  short: 100,
  /** Email addresses */
  email: 254,
  /** Free-text messages */
  message: 5000,
  /** Newsletter/Gönner free-text fields if ever needed */
  default: 1000,
} as const;

export const isValidEmail = (value: string): boolean =>
  value.length <= FIELD_LIMITS.email && EMAIL_PATTERN.test(value);
