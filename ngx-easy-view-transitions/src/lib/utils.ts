/**@internal*/
export function fnv1aHash(str: string) {
  let hash = 2166136261;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
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
