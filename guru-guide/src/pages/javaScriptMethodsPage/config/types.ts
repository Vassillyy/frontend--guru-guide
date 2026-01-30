export interface IMethod {
  name: string;
  description: string;
  example: string;
  syntax: string;
  parameters?: Array<{
    name: string;
    description: string;
  }>;
  specification: string;
  errors?: string[];
}

export type TConfig = {
  [key in Sections]: IMethod[];
}

export const enum Sections {
  ARRAY = "ARRAY",
  STRING = "STRING",
  NUMBER = "NUMBER",
  SYMBOL = "SYMBOL",
  OBJECT = "OBJECT",
  MAP = "MAP",
  WEAK_MAP = "WEAK_MAP",
  SET = "SET",
  WEAK_SET = "WEAK_SET",
  MATH = "MATH",
  DATE = "DATE",
  JSON = "JSON",
  PROMISE = "PROMISE",
  FUNCTION = "FUNCTION",
  REFLECT = "REFLECT",
  UTIL = "UTIL",
}

export const labelSections = {
  [Sections.ARRAY]: "Array",
  [Sections.STRING]: "String",
  [Sections.NUMBER]: "Number",
  [Sections.OBJECT]: "Object",
  [Sections.MAP]: "Map",
  [Sections.WEAK_MAP]: "WeakMap",
  [Sections.SET]: "Set",
  [Sections.WEAK_SET]: "WeakSet",
  [Sections.MATH]: "Math",
  [Sections.DATE]: "Date",
  [Sections.JSON]: "JSON",
  [Sections.PROMISE]: "Promise",
  [Sections.FUNCTION]: "Function",
  [Sections.SYMBOL]: "Symbol",
  [Sections.REFLECT]: "Reflect",
  [Sections.UTIL]: "Util",
};
