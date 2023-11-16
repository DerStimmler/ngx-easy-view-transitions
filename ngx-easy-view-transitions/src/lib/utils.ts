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
