// 将ts的一些不合理的傻逼涉及重写
/* eslint-disable -- ts傻逼方法重写 */
type KeysToUnion<T> = keyof T;

type Values<T> = T[KeysToUnion<T>];
// prettier-ignore
type ObjectKeys<T> =
  T extends object ? (keyof T) :
  T extends number ? never :
  T extends Array<any> | string ? string[] :
  never;

interface ObjectConstructor {
  keys<T>(o: T): ObjectKeys<T>[];
  /**
   * Returns an array of key/values of the enumerable properties of an object
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  entries<T>(o: T): [ObjectKeys<T>, Values<T>][];
}

interface ReadonlyArray<T> {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: any, fromIndex?: number): boolean;
}
