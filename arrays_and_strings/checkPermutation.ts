// Using map
export function checkPermutationMap(str1: string, str2: string): boolean {
  if(str1.length !== str2.length) return false;
  const charMap = new Map<string, number>();
  for(const c of str1) {
      charMap.set(c, (charMap.get(c) ?? 0)+1)
  }
  for(const c of str2) {
    const charCount = charMap.get(c);
    if(!charCount) return false;
    else if(charCount === 1) charMap.delete(c)
    else charMap.set(c, charCount - 1)
  }
  return true;
}

// Using arrays
export function checkPermutationArray(str1: string, str2: string): boolean {
  if(str1.length !== str2.length) return false;
  const charCountArray = Array(128).fill(0); // assume input contains only ascii characters
  for(const c of str1) {
    const index = c.charCodeAt(0);
    charCountArray[index]++;
  }
  for(const c of str2) {
    const index = c.charCodeAt(0);
    if(--charCountArray[index] < 0) {
      return false;
    }
  }
  return true;
}