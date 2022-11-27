// TODO 10
export interface ArrayWithId {
  id: string | number;
}

export function convertIdToStringInArr<T extends ArrayWithId>(arr: T[]) {
  return arr.map((obj) => ({ ...obj, id: obj.id.toString() }));
}
