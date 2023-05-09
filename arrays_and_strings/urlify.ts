export function urlify(str: string, finalLength: number): string { // Assume input doesn't start with space
  let result: string = '';
  for(let i = 0; i < finalLength; i++) {
    result = result + (str[i] === ' ' ? '%20' : str[i])
  }
  return result;
}

// Using in-builts
export const urlify1 = (str: string) => str.trim().split(' ').join('%20');