export const toKebabCase = (input: string): string =>
  (
    input
      .replace('ä', 'ae')
      .replace('ü', 'ue')
      .replace('ö', 'oe')
      .replace(':', '')
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
      ) ?? []
  )
    .map((x) => x.toLowerCase())
    .join('-') ?? '';
