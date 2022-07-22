const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const letters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const DEFAULT_DEPTH = 1;

// count -> number of properties
// depth -> how depth object will be
export function generateRandomObject(count: number, depth = DEFAULT_DEPTH) {
  const temp: any = {}; // fix

  console.log('hello');

  const helper = () => {
    for (let i = 0; i < count; i++) {
      const propertyIndex = Math.floor(Math.random() * letters.length);
      const valueIndex = Math.floor(Math.random() * numbers.length);
      temp[letters[propertyIndex]] = valueIndex;
    }
  };

  if (count > 0 && depth > 1) {
    for (let i = 0; i < count; i++) {
      const propertyIndex = Math.floor(Math.random() * letters.length);
      temp[propertyIndex] = generateRandomObject(count - i, depth - 1);
    }
    return temp;
  }

  helper();
  return temp;
}

export function generateEqualObjects(count: number, depth = DEFAULT_DEPTH) {
  const temp = generateRandomObject(count, depth);
  return [temp, temp];
}
