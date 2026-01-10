import { configNumber } from "./configNumber";
import { configString } from "./configString";
import { configSymbol } from "./configSymbol";
import { configObject } from "./configObject";
import { configDate } from "./configDate";
import { configFunction } from "./configFunction";
import { configJSON } from "./configJSON";
import { configMap } from "./configMap";
import { configWeakMap } from "./configWeakMap";
import { configSet } from "./configSet";
import { configWeakSet } from "./configWeakSet";
import { configUtil } from "./configUtil";
import { configArray } from "./configArray";

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

interface IConfig {
  [key: string]: IMethod[];
}

const enum Sections {
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
  [Sections.UTIL]: "Util",
};

export const config: IConfig = {
  ...configNumber,
  ...configString,
  ...configSymbol,
  ...configArray,
  ...configObject,
  ...configDate,
  ...configFunction,
  ...configJSON,
  ...configMap,
  ...configWeakMap,
  ...configSet,
  ...configWeakSet,
  ...configUtil,
};
