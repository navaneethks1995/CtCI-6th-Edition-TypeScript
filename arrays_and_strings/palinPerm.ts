export function palinPerm(str: string): boolean {
  const sanitized: string = str.toLowerCase().split(" ").join("");
  const charSet = new Set<string>();
  for(const c of sanitized) {
      if(charSet.has(c)) {
        charSet.delete(c);
      }
      else {
        charSet.add(c);
      }
    }
  return charSet.size <= 1;
}