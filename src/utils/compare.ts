// helper
export function isObject(object: Object) {
  return object != null && typeof object === 'object';
}

// shallow comparance
interface IObject {
  [key: string]: any;
}

function shallowCompare(object1: IObject, object2: IObject) {
  for (const key in object1) {
    if (object1[key] !== object2[key]) return false;
  }
  return true;
}

// deep comparance
function deepEqual(object1: IObject, object2: IObject) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }
  return true;
}

// compare with JSON
function deepEqualWithJSON(object1: IObject, object2: IObject) {
  return JSON.stringify(object1) === JSON.stringify(object2);
}

interface IMethods {
  [key: string]: (obj1: IObject, obj2: IObject) => boolean;
}

export const compareMethods: IMethods = {
  shallowCompare,
  deepEqual,
  deepEqualWithJSON,
};
