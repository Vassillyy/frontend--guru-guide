import { Topics, type IConfig } from './types.ts';
import { configTypesOfData } from './configTypesOfData.ts';

export const config: IConfig = {
  [Topics.BASIC]: [configTypesOfData],
  [Topics.FUNCTION]: [
    { value: 'function-declaration', title: 'Function Declaration' },
    { value: 'function-expression', title: 'Function Expression' },
  ],
  [Topics.OBJECT]: [
    { value: 'objects', title: 'Объекты' },
    { value: 'classes', title: 'Классы' },
  ],
  [Topics.PROMISE]: [
    { value: 'async-intro', title: 'Введение в асинхронность' },
    { value: 'promises', title: 'Promises' },
  ],
};
