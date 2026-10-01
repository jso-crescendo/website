/**
 * Normalizes form input for storage: trims whitespace and enforces a maximum
 * length. Does NOT entity-encode: rendering is escaped by React automatically,
 * and entity-encoding at input mangles legitimate characters (apostrophes,
 * slashes) in emails and Firestore.
 *
 * Returns `undefined` when the input is empty after trimming, so callers can
 * use `!value` checks for required-field validation.
 */
export const sanitize = (
  str: string | undefined,
  maxLength = 1000,
): string | undefined => {
  const trimmed = (str ?? '').trim();
  if (trimmed.length === 0) {
    return undefined;
  }
  return trimmed.length > maxLength ? trimmed.slice(0, maxLength) : trimmed;
};
