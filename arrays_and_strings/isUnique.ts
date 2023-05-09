function isUnique(str: string): boolean {
  const visited = new Set<string>();
  for(const c of str) {
    if(visited.has(c)) {
      return false;
    }
    visited.add(c);
  } 
  return true;
}


// Using bit manipulation(works only for small case alphabets)
function isUnique_bitwise(str: string): boolean {
  let checker: number = 0;
  for(const c of str) { 
    const val = c.charCodeAt(0) - 97;
    if((checker & (1 << val)) > 0) {
      return false;
    }
    checker |= (1 << val)
  } 
  return true;
}

export default isUnique;