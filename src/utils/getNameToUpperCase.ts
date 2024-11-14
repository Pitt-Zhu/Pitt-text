/**
 * 把每个对象的name属性的首字母大写，并返回这个对象
 */

interface hasNameObj {
  name: string;
}

export function getNameToUpperCase<T extends hasNameObj>(obj: T): T {
  obj.name = obj.name
    .split(" ")
    .map((i) => i[0].toUpperCase() + i.substring(1))
    .join();
  console.log(obj.name);

  return obj;
}

export const nameToUpperCase = <T extends hasNameObj>(obj: T): T => {
  obj.name = obj.name
    .split(" ")
    .map((i) => i[0].toUpperCase() + i.substring(1))
    .join();
  console.log(obj.name);

  return obj;
};
