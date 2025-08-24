/**@internal*/
export function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    const code = str.charCodeAt(i);
    hash = (hash << 5) - hash + code;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

/**@internal*/
export function isValidCustomIdentValue(value: string): boolean {
  const regex =
    /^(?:[A-Za-z_]|-(?!\d)|\\[0-9A-Fa-f]{1,6}|\\.)[A-Za-z0-9_-]*(?:\\[0-9A-Fa-f]{1,6}|\\.)*[A-Za-z0-9_-]*$/u;

  return regex.test(value);
}

/**@internal*/
export function isValidViewTransitionName(value: string): boolean {
  return (
    isValidCustomIdentValue(value) &&
    value !== 'unset' &&
    value !== 'initial' &&
    value !== 'inherit' &&
    value !== 'none'
  );
}
