export interface ISection {
  value: string;
  title: string;
}

type IConfig = {
  [key in Topics]: ISection[];
};

export const enum Topics {
  BASIC = 'BASIC',
  FUNCTION = 'FUNCTION',
  OBJECT = 'OBJECT',
  PROMISE = 'PROMISE',
}

export const labelTopics = {
  [Topics.BASIC]: "Основы JavaScript",
  [Topics.FUNCTION]: "Функции",
  [Topics.OBJECT]: "Объекты и ООП",
  [Topics.PROMISE]: "Объекты и ООП",
};

export const config: IConfig = {
  [Topics.BASIC]: [
    { value: 'variables', title: 'Переменные' },
    { value: 'data-types', title: 'Типы данных' }
  ],
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
}
